import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Support = () => {
  return (
   <MainContainer>
       <ContainerWrapper>
            <Card2>
               <h2>Your Support Will Help Us Reach More <span>Vulnerable</span> People</h2>
               <p>
               We trust that humans have so much go and love to offer one another, 
               and the world, provided that the condition and environment is enabling 
               to nurture these inherent ‘good’. Being conscious of this, we set out, 
               and have made it our goal to build communities, encourage co-operations, 
               inspire selfless service, and be an example of sanity to be emulated for 
               positive change.
                </p>
               <Link to='/donate' style={{textDecoration:'none', width:'100%'}}><Button variant="contained" color="success" style={{width:'100%'}}>Donate</Button></Link> 
            </Card2>
            <Card1 src="https://firebasestorage.googleapis.com/v0/b/edhf-nigeria.appspot.com/o/donate.jpg?alt=media&token=79f0bbb3-2a7e-4fae-a8a4-cba6a7bf0cc8"/>
       </ContainerWrapper>
   </MainContainer>
  )
}

export default Support;

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
`

const ContainerWrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media screen and (max-width: 860px){
        justify-content: center;
    }
`

const Card1 = styled.img`
    width: 562px;
    height: 352px;
    border-radius: 8px;
    object-fit: cover;
    object-position: center;

    @media screen and (max-width: 425px){
        width: 100%;
        height: 320px;
    }
`

const Card2 = styled.div`
    width: 562px;
    height: 352px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    span{
            color: #EE5728;
        }
    
    p{
        font-size: 16px;
    }

    h2{
        font-weight: 500;
        font-size: 38px;
        line-height: 45px;
        color: #505050;
    }

    @media screen and (max-width: 860px){
      margin-bottom: 25px;
    }

    @media screen and (max-width: 450px){
        width: 100%;
        height: 380px;
        justify-content: space-evenly;

        h2{
        font-size: 23px;
        line-height: 30px;
        }

    }
`