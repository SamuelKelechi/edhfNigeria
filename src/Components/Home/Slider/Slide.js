import React from "react";
import styled from 'styled-components';
import { Carousel } from 'antd';
import { Button } from "@mui/material";
import {Link} from 'react-router-dom'
import Slider from '../../Images/slider.jpeg'

export const Slide = () => { 

  return (
  <>
  <Container>
  <Wrapper> 
				<Mylider autoplay>
					<MyStyled>
						<SliderImage src="https://firebasestorage.googleapis.com/v0/b/edhf-nigeria.appspot.com/o/Slide1.JPG?alt=media&token=bd60025e-b66e-4029-bd93-69db4d3acb01" />
					</MyStyled>
					<MyStyled>
						<SliderImage src="https://firebasestorage.googleapis.com/v0/b/edhf-nigeria.appspot.com/o/Slide2.JPG?alt=media&token=d22b8520-d067-4d69-8983-d56a9ce91d83" />
					</MyStyled>
					<MyStyled>
						<SliderImage src="https://firebasestorage.googleapis.com/v0/b/edhf-nigeria.appspot.com/o/Slide.JPG?alt=media&token=5110216b-1778-4133-ad5d-138bb2c8b214" />
					</MyStyled>
          <MyStyled>
						<SliderImage src="https://firebasestorage.googleapis.com/v0/b/edhf-nigeria.appspot.com/o/Slide4.JPG?alt=media&token=a4307a58-39fe-44d1-a11c-017f3be23401" />
					</MyStyled>
          <MyStyled>
						<SliderImage src="https://firebasestorage.googleapis.com/v0/b/edhf-nigeria.appspot.com/o/Slide6.JPG?alt=media&token=b5c30254-926d-4133-8565-12b4a5d3329b" />
					</MyStyled>
          <MyStyled>
						<SliderImage src={Slider} />
					</MyStyled>
				</Mylider>
			</Wrapper>
      <TextHold>
        <h2>We make lives and communities better</h2>
        <p>
          At the core of our values, is the utmost
           goal of making individual lives, whether 
           old or young, and communities of people, 
           better than we meet it.
        </p>
        <div>
          <Link to='/donate' style={{textDecoration:'none'}}><Button variant="contained" color="success">Donate</Button></Link>
          <Link to='/about' style={{textDecoration:'none'}}><Button variant="outlined" style={{color:'white', border:'1px solid white'}}>Read More</Button></Link> 
        </div>
      </TextHold>
  </Container>
  </>
  )
}

export default Slide;

const Container = styled.div`
width: 100%;
height: 400px;
overflow: hidden;
@media screen and (max-width: 425px){
margin-bottom: 10px;
padding-top: 80px;
}

`;
const Mylider = styled(Carousel)`
  /* transition: all 300s ease; */
`;
const MyStyled = styled.div`
width: 100%;
height: 550px;
background-color: #003399;
opacity: 0.95;
overflow: hidden;

@media screen and (max-width: 600px) {
  height: 400px;
}
`;
const Wrapper = styled.div`
width: 100%;
position: absolute;
overflow: hidden;
`;
const SliderImage = styled.img`
width: 100%;
height: 100%;
opacity: 0.3;
object-fit: cover;
object-position: center;
`;

const TextHold = styled.div`
  position: absolute;
  margin-top: 80px;
  margin-left: 150px;
  display: flex;
  flex-direction: column;
  width: 400px;
  color: white;

  h2{
  font-weight: 500;
  color: white;
  font-size: 45px;
  line-height: 59px;
  }

  p{
    font-size: 16px;
  }

  div{
    display: flex;
    justify-content: space-evenly;

    Button{
      width: 150px;
    }
  }

  @media screen and (max-width: 768px){
    margin: 0;
    margin-top: 70px;
    margin-left: 60px;
  }

  @media screen and (max-width: 450px){
    margin: 0;
    margin-top: 100px;
    margin-left: 10px;
    width: 95%;

    div{
    display: flex;
    justify-content: space-evenly;

    Button{
      width: 130px;
      }
    }

    h2{
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    }

    p{
      text-align: center;
    }
  }
`