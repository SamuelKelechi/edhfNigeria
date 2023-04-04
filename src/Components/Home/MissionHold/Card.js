import React from 'react';
import styled from 'styled-components';
import Aos from "aos";
import "aos/dist/aos.css";


const Card = (props) => {

    React.useEffect(()=>{
        Aos.init()
    },[]);

  return (
    <CardHold  data-aos="fade-up"
    data-aos-offset="200"
    data-aos-easing="ease-in-sine"
    
    style={{background: props.col}}>
        <CardWrap>
            <IconHold src={props.icon}/>
            <h2>{props.title}</h2>
            <p>
                {props.para}

            </p>
        </CardWrap>
    </CardHold>
  )
}

export default Card;

const CardHold = styled.div`
    height: 350px;
    width: 360px;
    color: white;
    box-shadow: 2px 2px 2px 2px rgba(51, 154, 240, 0.25);
    border-radius: 10px;
    margin: 10px;
    display: flex;
    justify-content: center;
    z-index: 500;

    @media screen and (max-width: 425px){
        width: 100%;
        margin: 0px;
        height: 320px;
        margin-top: 10px;
    }
`
const CardWrap = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    h2{
        color: white;
        font-weight: 500;
        font-size: 38px;
        line-height: 45px;
    }

    p{
        width: 78%;
        font-size: 18px;
        line-height: 20px;
    }

    @media screen and (max-width: 425px){
        width: 90%;

        h2{
        color: white;
        font-weight: 500;
        font-size: 25px;
        line-height: 25px;
        }

        p{
        width: 95%;
        font-size: 16px;
        }
    }
`
const IconHold = styled.img`
    color: rgba(255, 255, 255, 1);
`