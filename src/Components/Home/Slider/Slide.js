import React from "react";
import styled from 'styled-components';
import Avat1 from '../../Images/Slide1.JPG';
import Avat2 from '../../Images/Slide2.JPG';
import Avat3 from '../../Images/Slide.JPG';
import Avat4 from '../../Images/Slide4.JPG';
import Avat5 from '../../Images/Slide6.JPG';


import { Carousel } from 'antd';
import { Button } from "@mui/material";
import {Link} from 'react-router-dom'

export const Slide = () => { 

  return (
  <>
  <Container>
  <Wrapper> 
				<Mylider autoplay>
					<MyStyled>
						<SliderImage src={Avat1} />
					</MyStyled>
					<MyStyled>
						<SliderImage src={Avat2} />
					</MyStyled>
					<MyStyled>
						<SliderImage src={Avat3} />
					</MyStyled>
          <MyStyled>
						<SliderImage src={Avat4} />
					</MyStyled>
          <MyStyled>
						<SliderImage src={Avat5} />
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
margin-bottom: 120px;
padding-top: 86px;

@media screen and (max-width: 425px){
margin-bottom: 10px;
}

/* padding-top: 80px; */
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

  @media screen and (max-width: 425px){
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