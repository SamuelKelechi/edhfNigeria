import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Image1 from '../../Images/impact1.JPG';
import Image2 from '../../Images/impact2.JPG';
import {Link} from 'react-router-dom'


const OurImpact = () => {
  return (
    <Container>
        <ContainerWrapper>
            <HeadHold>
                Our Impact
            </HeadHold>
        
            <CardWrap>
                <Card1>
                    <p>
                    We believe everyone should be able to live with dignity, 
                    without dependence. We are a Non-Governmental Organization, 
                    based in Lagos Nigeria. We strive to protect and feed the poor, 
                    advocate and enlighten communities, empower young people, serve as 
                    the voice to the voiceless, we give grants and scholarship, we 
                    serve as an outstretched arm of God, we bring succor and hope to the need
                    </p>
                    <Links to='/about'><Button variant="contained" color="success">Read More</Button></Links>
                </Card1>
                <ImgHold src={Image1}/>
                <ImgHold2 src={Image2}/>
            </CardWrap>
        </ContainerWrapper>
    </Container>
  )
}

export default OurImpact;

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const ContainerWrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const HeadHold = styled.div`
    font-weight: 600;
    font-size: 38px;
    line-height: 45px;
    color: #505050;
    margin-bottom: 15px;
`

const CardWrap = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media screen and (max-width: 900px){
        display: flex;
        justify-content: center;
    }
    @media screen and (max-width: 425px){
        flex-direction: column-reverse;
    }
`

const Card1 = styled.div`
    width: 361px;
    height: 259px;
    border-radius: 8px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    Button{
        width: 95%;
        height: 48px;
        border-radius: 8px;
    }

    p{
        width: 95%;
        font-size: 16px;
    }

    @media screen and (max-width:678px){
        margin: 0;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 425px){
        width: 100%;
        margin-bottom: 30px;
        margin-top: 10px;

        Button{
        width: 100%;
        }

        p{
        width: 100%;
        }
    }
`

const ImgHold = styled.img`
    width: 361px;
    height: 259px;
    border-radius: 8px;
    margin: 10px;
    object-fit: cover;
    object-position: center;

    @media screen and (max-width: 768px){
        margin-top: 20px;
    }

    @media screen and (max-width: 425px){
        width: 100%;
        margin: 0;
        margin-top: 10px;
    }
`

const ImgHold2 = styled.img`
    width: 361px;
    height: 259px;
    border-radius: 8px;
    margin: 10px;
    object-fit: cover;
    object-position: center;

    @media screen and (max-width: 425px){
       display: none;
    }
`
const Links = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;
`
