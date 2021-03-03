import React from 'react'
import styled from '@emotion/styled';

const Card = styled.div`
    padding: 1rem;
    border-radius: 5px;
    margin: .5rem 25% .5rem 25%;
    font-size: 1rem;
    font-weight: 600;
    color: #35394A;
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
