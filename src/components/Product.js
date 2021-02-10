import React from 'react'
import styled from '@emotion/styled';

const Card = styled.div`
    padding: 1rem;
    border-radius: 5px;
    margin: .5rem 1.5rem .5rem 1.5rem;
    border: 1px solid #35394A;
    font-size: 1rem;
    display: flex;
    font-size: .8rem;
    flex-direction: column;
    justify-content: flex-start;
    transition: 1s;
    background: linear-gradient(-45deg,  #EA5C54  0%, #bb6dec 100%);

`;

const Product = ({
    product,
    quantity,
    storage,
    expiration
}) => {

    
    return (

        <Card>
            Product: {product}
            <br></br>
            Quantity: {quantity}
            <br></br>
            From : {storage.split('T').shift()}
            <br></br> 
            Expires: {expiration.split('T').shift()}
        </Card>

    )
}

export default Product;
