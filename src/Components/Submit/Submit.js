import React, { useState } from 'react';
import styled from 'styled-components';
import img from '../Images/Support.jpg';
import Visa from '../Images/Visa.png';
import { PaystackButton } from 'react-paystack'
import Eco from '../Images/Eco.jpg';
import Gt from '../Images/gtbank.jpeg';


const Submit= () => {

    const publicKey = 'pk_live_5bdeb5564c70d46819d69e212a99b8ac73508841'

    const [amounts, setAmounts] = useState()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const amount = amounts * 100

    const componentProps = {
        reference: (new Date()).getTime().toString(),
        email,
        amount,
        metadata: {
          name,
          phone,
        },
        publicKey,
        text: "Donate Now",
        onSuccess: () =>
            console.log("Thanks for Supporting us"),
        onClose: () => alert("Wait! Any issues making Transaction? Please, contact us :("),
      }


  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <MainContain>
       <LandingPage>
            <Image src = {img}/>
            <OverLayer>
                <Span>CHANGE THE LIFE OF THOSE <br/> WHO HAVE NO HOPE</Span>
                <p>
                   Help us reach more children and families in need
                </p>
            </OverLayer>
        </LandingPage>

        <DonateHold>
            <DonateContent>
                <Top>Donate Now</Top>
                <Avat src={Visa} alt='donate' />
                <br/>
                <p>Please enter your card information</p>
                <FomWrapper>
                    <Left>
                        <label>Amount</label><br/><input   value={amounts}
                            onChange={(e) => {
                                setAmounts(e.target.value);
                            }} type='number' placeholder='Enter Amount to Debit'/>
                        <br/>
                        <br/>
                        <label>Name on Card</label><br/><input type='string' onChange={(e) => {
                                setName(e.target.value);
                            }} placeholder='Enter Name on Your Card'/>
                        <br/>
                        <br/>
                    </Left>
                    <Right>
                        <label>Email</label><br/><input  type='email' onChange={(e) => {
                                setEmail(e.target.value);
                            }} placeholder='Enter Your Email'/>
                        <br/>
                        <br/>
                        <label>Phone Number</label><br/><input type='number' onChange={(e) => {
                                setPhone(e.target.value);
                            }} placeholder='Enter Telephone Number'/>
                        <br/>
                        <br/>
                    </Right>
                </FomWrapper>
                <PayButton {...componentProps} />
            </DonateContent>
        </DonateHold>
        <br/>
        <BankDetails>
            <h2>YOU CAN PAY TO ANY OF THE ACCOUNT DETAILS BELOW</h2>
            <Wrapper>
                <LeftAccount>
                    <h3>Elisha Development and Humanitarian Foundation</h3>
                    <h2>ECO BANK</h2>
                    <h3 style={{fontSize:'19px'}}>3150003919</h3>
                    <Logo src={Eco}/>
                </LeftAccount>
                <RightAccount>
                    <h3>Elisha Development and Humanitarian Foundation</h3>
                    <h2>GT BANK</h2>
                    <h3 style={{fontSize:'19px'}}>0564984454</h3>
                    <Logo src={Gt}/>
                </RightAccount>
            </Wrapper>
        </BankDetails>
     </MainContain>
    </>
  )
}

export default Submit;

const MainContain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LandingPage = styled.div`
    width:100%;
    height:500px;
    background-color:blue;

    @media screen and (max-width: 650px){
        height: 350px;
    }
`
const Image = styled.img`
    width:100%;
    height:500px;
    object-fit:cover;
    object-position: center;
    position: absolute;

    @media screen and (max-width: 650px){
        height: 350px;
    }
`
const OverLayer = styled.div`
    height:100%;
    width:100%;
    background-color:rgb(9,82,252, 40%);
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    p{
        color: white;
        text-align: center;
        font-size: 22px;
    }

    @media screen and (max-width: 650px){
        justify-content: flex-end;
        p{
        color: white;
        text-align: center;
        font-size: 19px;
        width: 98%;
      }
    }  
`
const Span = styled.div`
    font-size:40px;
    color:#ffff;
    font-weight:bold;
    text-align: center;

    @media screen and (max-width: 425px){
    font-size:22px;
    }
`
const DonateHold = styled.div`
    width: 80%;
    padding: 60px 0 60px 0;
    background-color: #003399;
    margin-top: -120px;
    z-index: 100;
    display: flex;
    justify-content: center;

    h3{
        color: white;
    }

    @media screen and (max-width: 768px){
        width: 90%;
    }
    @media screen and (max-width: 650px){
        width: 80%;
        margin-top: 10px;
    }
    @media screen and (max-width: 425px){
        width: 100%;
    }
`
const DonateContent = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        width: 100%;
        color: white;
        font-size: 20px;
        text-align: center;
    }

    Button{
        background-color: #25AAE2;
        height: 40px;
        width: 300px;
    }

    @media screen and (max-width: 768px){
        width: 90%;

        Button{
            margin-top: 30px;
        }

        p{
            text-align: center;
            padding: 0;
        }
    }

    @media screen and (max-width: 425px){
          p{
            font-size: 17px;
        }
    }
`

const Top = styled.h2`
    color: white;
    font-size: 35px;
    line-height: 45px;

    @media screen and (max-width: 425px){
        font-size: 25px;
        line-height: 25px;
    }
`

const Avat = styled.img`
    @media screen and (max-width: 425px){
        width: 80%;
    }
`

const FomWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Left = styled.div`
    width: 350px;
    margin: 10px;
    color: white;

    input{
        width: 100%;
        height: 40px;
        color: black;
        border-radius: 8px;
        outline: none;
        padding-left: 15px;
    }

    @media screen and (max-width: 768px){
        margin: 0
    }
`

const Right = styled.div`
        width: 350px;
        margin: 10px;
        color: white;

    input{
        width: 100%;
        height: 40px;
        color: black;
        border-radius: 8px;
        outline: none;
        padding-left: 15px;
    }

    @media screen and (max-width: 768px){
        margin: 0
    }
`
const BankDetails = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    text-align: center;

    @media screen and (max-width: 425px){
        width: 90%;
    }
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const LeftAccount = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #007FB7;
    padding: 15px 0 15px 0;
    border-radius: 8px;
    margin: 0 0 20px 0;

    h2{
        color: white;
    }
    h3{
        color: white;
    }
    
    @media screen and (max-width: 425px){
        width: 100%
    }
`

const RightAccount = styled.div`
     width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E04403;
    padding: 15px 0 15px 0;
    border-radius: 8px;
    margin: 0 0 20px 0;
    
    h2{
        color: white;
    }
    h3{
        color: white;
    }
    
    @media screen and (max-width: 425px){
        width: 100%
    }
`
const PayButton = styled(PaystackButton)`
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 16px;
`
const Logo = styled.img`
    height: 100px;
`