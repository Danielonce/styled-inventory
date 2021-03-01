import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import Product from './Product';

//Styled components

const Button = styled.button`
    padding: 1rem;
    margin: 1rem 30% .5rem 30%;
    border: 1px solid #35394A;
    border-radius: 5px;
    font-size: 1rem;
    background: linear-gradient(-45deg,  #EA5C54  0%, #bb6dec 100%);
    &:hover{
        transition: 1s;
        background: #3D7C5F;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #35394A;
`;

const UpdateContainer = styled.div`
    padding: 1rem;
    border-radius: 0 0 5px 5px;
    margin: -1rem 1.5rem 1rem 1.5rem;
    border: 1px solid #35394A;
    font-size: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 600px){
        flex-direction: column;
    }
`;



const Search = () => {

    const [list, setList] = useState([]);
    const [inputSearch, setInputSearch] = useState(null);
    const [search, setSearch] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newStorage, setNewStorage] = useState('');
    const [newExpiration, setNewExpiration] = useState('');


    /* This function fetch data from server and modify the list state.
    It also modify inputSearch as true to render a search input */

    const getProducts = () => {
        axios.get('https://styled-server.herokuapp.com/products')
        .then( (response) => {
            setList(response.data)
            setInputSearch(true)
        }).catch ( (err) => {
            console.log(err)
        })
    };

    /* This function update from input's values and send those values passing
    the id of chosen product */

    const updateQuantity = (id) => {
        axios.put('https://styled-server.herokuapp.com/update', {
            quantity: newQuantity,
            storage: newStorage,
            expiration: newExpiration,
            id: id
        }).then((response) => {window.location = '/'})
    }

    /* Also. This function deletes by passing the id */
    
    const deleteProduct = (id) => {
        axios.delete(`https://styled-server.herokuapp.com/delete/${id}`)
        .then((response) => {window.location = '/'})
    }

    
    //Modify the state of 'search' by passing the values of the search input

    const handleSearch = e => {
        setSearch(e.target.value)
    }

    //Filters products by taking the state of 'search'

    const filteredProducts = list.filter(product => 
        product.product.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <Container>



          <Button
            onClick={getProducts}
          >My products</Button>



            {inputSearch ? 
                <input 
                    className='inpt search' 
                    type='text' 
                    onChange={handleSearch}
                    placeholder='Search'
            /> : null}



          {filteredProducts.map((element, key) => 
          <Fragment key={key}>



            <Product
                key={element.id}
                product={element.product}
                quantity={element.quantity}
                storage={element.storage}
                expiration={element.expiration}
            />



            <UpdateContainer key={key}>
                <div className='labelDiv'>
                <label className='searchLabel'>New quantity</label>  
                <input
                    className='inpt' 
                    type='number'
                    onChange={e => setNewQuantity(e.target.value)}/>
                </div>


                <div className='labelDiv'>
                <label className='searchLabel'>New storage date</label>
                <input
                    className='inpt' 
                    type='date'
                    onChange={e => setNewStorage(e.target.value)}/>
                </div>



                <div className='labelDiv'>
                <label className='searchLabel'>New expiration</label>
                <input
                    className='inpt' 
                    type='date'
                    onChange={e => setNewExpiration(e.target.value)}/>
                </div>



                <button 
                    className='btn update'
                    onClick={() => {updateQuantity(element.id)}}
                >Update</button>



                <button
                    className='btn delete'
                    onClick={() => {deleteProduct(element.id)}}
                >Delete</button>
            </UpdateContainer>



            </Fragment>
          )}  




        </Container>
    )
};

export default Search;
