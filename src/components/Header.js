import React from 'react';
import styled from '@emotion/styled';
import pinkpolish from '../assets/pnp.png'

const Head = styled.header`
    height: 5.6rem;
    width: 100%;
    background: linear-gradient(-45deg,  #EA5C54  0%, #bb6dec 100%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Imagen = styled.img`
    border-radius: 10%;
    height: 4.7rem;
    width: 4.7rem;
    background-color: rgba(0,0,0,0);
`;

const Title = styled.h2`
    color: #FFF;
    display: inline-block;
    background-color: rgba(0,0,0,0);
    margin-top: 1rem;
`;

const Header = () => {
    return (
        <Head>
            
                <Imagen
                    src={pinkpolish}
                    alt={'pink polish'}
                />
           
                <Title>Styled-Inventory</Title>    
        </Head>
    )
}

export default Header
