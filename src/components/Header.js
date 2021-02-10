import React from 'react';
import styled from '@emotion/styled';
import pinkpolish from '../assets/pnp.png'

const MainHeader = styled.header`
    height: 5rem;
    width: 100vw;
    background: linear-gradient(-45deg,  #EA5C54  0%, #bb6dec 100%);
    position: fixed;
    margin-top: -7rem;
`;

const SubHeader = styled.div`
    height: 3rem;
    background-color: #35394A;
    margin-top: 2rem;
    position: relative;
`;

const PicContainer = styled.div`
    padding: 3rem;
    border-radius: 50%;
    background-color: #35394A;
    position: absolute;
    bottom: -1.75rem;
    left: 1rem;
    display:inline-block;
`;

const Imagen = styled.img`
    border-radius: 50%;
    height: 90px;
    width: 90px;
    position: absolute;
    display: inline-block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const Title = styled.h2`
    color: #FFF;
    display: inline-block;
    position: absolute;
    background-color: #35394A;
    left: 7rem;
    font-size: 1.5rem;
    top: .7rem;
`;

const Header = () => {
    return (
        <MainHeader>
            <SubHeader>
                <PicContainer>
                    <Imagen
                        src={pinkpolish}
                        alt={'pink polish'}
                    />
                </PicContainer>
                    <Title>Styled-Inventory</Title>
            </SubHeader>
        </MainHeader>
    )
}

export default Header
