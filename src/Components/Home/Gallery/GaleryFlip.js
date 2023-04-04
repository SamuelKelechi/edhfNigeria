import React from "react";
import styled from 'styled-components';
import Flip from './Flip';
import {GiFastForwardButton} from 'react-icons/gi';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';


const GalleryFlip = () => {

  return (
    <Container>
        <h2>Our Event Gallery</h2>
        <GalleryWrapper>
            <TextHolder>
                Explore Our Gallery to See Some of Our Outreach
                <Link to="" style={{textDecoration:"none"}}> <Button variant="outlined" size="" style={{height:"50px", width:"280px"}}><GiFastForwardButton /></Button></Link>
            </TextHolder>
            <FlipHolder>
                <Flip />
            </FlipHolder>
        </GalleryWrapper>
    </Container>
  );
};

export default GalleryFlip;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items:center;
align-items: center;
background-color: #F4F4F4;
margin-top: 20px;

h2{
color: #003399;
font-family: Roboto;
font-style: Medium;
font-size: 38px;
line-height: 20px;
}

@media screen and (max-width: 425px){
    font-size: 20px; 
}
`
const GalleryWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
width: 90%;
align-items: center;
padding: 10px;

@media screen and (max-width: 1200px){
    justify-content: center;
}
@media screen and (max-width: 450px){
    width: 95%;
    padding: 0;
}
`
const TextHolder = styled.div`
height: 450px;
// background-color:green; 
width: 500px;
margin: 5px;
font-size: 50px;
display: flex;
flex-direction: column;
justify-content: center;
font-weight: bolder;
text-align: center;

@media screen and (max-width: 450px){
    width: 100%;
    font-size: 35px;
    height: 220px;
    margin-bottom: 20px;
    margin-top: -20px;
}
`
const FlipHolder = styled.div`
height: 450px;
width: 600px;
margin: 5px;
position: relative;
border-radius: 8px;
z-index: 1;

@media screen and (max-width: 700px){
    width: 95%;
}
@media screen and (max-width: 320px){
    margin-top: 28px;
}
`