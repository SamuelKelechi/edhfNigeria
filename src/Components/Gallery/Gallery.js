import React from 'react';
import styled from 'styled-components';

function Gallery() {
  return (
      <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Container>
        <Title>Photo Gallery</Title>
        <SubTitle>Explore All Our Amazing Outreach</SubTitle>
        <ContainerWrap>
            <Images />
        </ContainerWrap>
    </Container>
    </>
  )
}

export default Gallery;

const Container = styled.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`
const ContainerWrap = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
`
const Images = styled.img`
    height: 270px;
    width: 270px;
    margin: 10px;
    background-color: whitesmoke;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);

    :hover{
        object-fit: cover;
        transform: scale(1.1);    
        transition: all 0.5s ease-out;
    }
`
const Title = styled.div`
    font-size: 45px;
    font-weight: 500;
    color: #003399;
`
const SubTitle = styled.div`
    font-size: 35px;
    font-weight: 500;

    @media screen and (max-width: 425px){
        font-size: 25px;
        text-align: center;
    }
`