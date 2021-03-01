import React, {useState} from 'react'
import styled from '@emotion/styled';
import axios from 'axios';


//Styled components:

const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    background-color: #FFF;
    padding: 1rem;
    border-radius: 5px;
    margin: .5rem 0 .5rem 0;
    border: none;
    font-size: 1rem;
    width: 50%;
`;

const Label = styled.label`
    color: #FFF;
    font-size: .8rem;
    padding: 1.1rem 0 0 0;
`;

const Button = styled.button`
    padding: 1rem;
    margin: .5rem 0 .5rem 0;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    width: 33%;
    background: linear-gradient(-45deg,  #EA5C54  0%, #bb6dec 100%);
    &:hover{
        transition: 1s;
        background: #BD6CE6;
        color: #FFF;
    }
`;

//Form function:
const Form = () => {


    /* This useState init as an object with empty values, this prevent from put a different
    useState for every value */
    const [name, setName] = useState({
        product: '',
        quantity: '',
        storage: '',
        expiration: ''
    })

    //Destructuring to put keys as input values
    const {product, quantity, storage, expiration} = name;

    //This function storage all the data as an object with spread operator to preserve changes.
    const productObject = (e) => {
        setName({
            ...name,
            [e.target.name] : e.target.value
        })
    }


    return (
        <Container>
            <Label>Product</Label>
            <Input 
                type='text'
                name='product'
                value={product}
                onChange={productObject}
            />
            
            <Label>New quantity</Label>
            <Input 
                type='number'
                name='quantity'
                value={quantity}
                onChange={productObject}
            />
            
            <Label>Storage day</Label>
            <Input 
                type='date' 
                name='storage'
                value={storage}
                onChange={productObject}
            />

            <Label>Expiration date</Label>
            <Input 
                type='date'
                name='expiration'
                value={expiration}
                onChange={productObject}
            />

            <Button
                //This function add an event to go to the post endpoint with all the form's values
                onClick={(e) => {
                    e.preventDefault()
                    axios.post('https://styled-server.herokuapp.com/createproduct', {
                        product: product,
                        quantity: quantity,
                        storage: storage,
                        expiration: expiration
                    }).then( (response) => { window.location = '/' }).catch ( (err) => {console.log(err)})                
                }}
            >Add!</Button>
        </Container>
    )
}

export default Form
