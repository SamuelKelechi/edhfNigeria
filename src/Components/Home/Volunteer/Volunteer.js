import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Volun from '../../Images/Slide3.JPG';


export const Volunteer = () => {
  return (
    <Container>
        <ContainerWrap>
            <LeftCard>
                <h2>Become a Part of Our Impact Team, <span>Volunteer!</span></h2>
                <ImgHold src={Volun}/>
            </LeftCard>
            <RightCard>
                <RightWrap>
                    <h2>Fill our volunteer form</h2>
                    <div>
                        Name <br/><input placeholder='Enter your first and last name'/>
                    </div>
                    <div>
                        Email <br/><input placeholder='Enter your email'/>
                    </div>
                    <div>
                        Leave a message <br/><textarea placeholder='Enter your Message'/>
                    </div>
                    <Button>Send</Button>
                </RightWrap>
            </RightCard>
        </ContainerWrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const ContainerWrap = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

   @media screen and (max-width: 1024px){
       justify-content: center;
   }
    
`
const LeftCard = styled.div`
    width: 500px;
    height: 500px;

    span{
        color: #3AB54A
    }

    h2{
        font-weight: 500;
        font-size: 38px;
        line-height: 45px;
    }

    @media screen and (max-width: 860px){
        width: 100%;
        height: 400px;
        h2{
        font-weight: 500;
        font-size: 28px;
        line-height: 30px;
        }
    }
`
const ImgHold = styled.img`
    width: 578px;
    height: 393px;
    border-radius: 8px;
    object-fit: cover;
    object-position: center;

    @media screen and (max-width: 860px){
        width: 100%;
        height: 320px;
    }
`

const RightCard = styled.div`
    width: 600px;
    height: 500px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;

    @media screen and (max-width: 860px){
        width: 100%;
    }

    @media screen and (max-width: 425px){
        margin-top: 20px;
    }
`

const RightWrap = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    Button{
        background: #25AAE2;
        border-radius: 8px;
        width: 100%;
        height: 48px;
        color: white;
        font-weight: bold;

        &:hover{
            opacity: 0.9px;
            color: green;

        }
    }

    div{
        width: 100%;
    }

    input{
        width: 100%;
        height: 50px;
        border: 1px solid #505050;
        box-sizing: border-box;
        box-shadow: 0px 1px 1px rgba(51, 154, 240, 0.1);
        border-radius: 8px;
        padding-left: 20px;
        outline: none;
    }

    textarea{
        width: 100%;
        height: 90px;
        border-radius: 5px;
        display: flex;
        padding-top: 30px;
        padding-left: 20px;
        outline: none;
    }

    h2{
        font-weight: 500;
        font-size: 35px;
        line-height: 32px;
        color: #505050;
    }

    @media screen and (max-width: 425px){
        width: 90%;

        input{
            height: 40px;
        }
    }
`


