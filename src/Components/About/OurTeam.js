import React from "react";
import styled from "styled-components";
import Cards from "./TeamCard";
import Ajose from "../Images/ajose.jpeg"


const Card = () =>{
    return(
        <Content>
            <h1>OUR TEAM</h1>
            <Wrapper>
               <Cards img="https://firebasestorage.googleapis.com/v0/b/edhf-nigeria.appspot.com/o/elisha.jpg?alt=media&token=b2337beb-1c4f-46b3-8a79-e57f237bfb56" 
                name="Elisha Ajose" 
                text="FOUNDER/CHAIRMAN"
                fullstory=""
                avat={Ajose}
               />

               <Cards img="https://firebasestorage.googleapis.com/v0/b/edhf-nigeria.appspot.com/o/james.jpg?alt=media&token=f9de3679-4fed-4b2a-8829-3a1c0c6858fa" name="James Adeleye Adesuyi" text="TREASURER"/>

               <Cards img="https://firebasestorage.googleapis.com/v0/b/edhf-nigeria.appspot.com/o/sunday.jpg?alt=media&token=04d1d6af-ae39-43e6-86ee-e1ca13a9b7ca" name="Sanni Sunday Emmanuel" text="SECRETARY"/>

               <Cards img="https://firebasestorage.googleapis.com/v0/b/edhf-nigeria.appspot.com/o/titi.jpg?alt=media&token=f90b6b19-286d-4cfa-b002-33f35ce8b790" name="Miss Titilope Olumofin" text="SOCIAL WORKER"/>

               <Cards img="https://firebasestorage.googleapis.com/v0/b/edhf-nigeria.appspot.com/o/toyin.jpg?alt=media&token=6a2412a1-7db7-4d15-9ab8-d657f66baf38" name="Oluwatoyin Alicia Johnson" text="SOCIAL WORKER"/>
            </Wrapper>
        </Content>
    )
}
export default Card;

const Wrapper = styled.div`
    width:88%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    justify-content:space-between;

    @media screen and (max-width:768px){
        width:88%;
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
    }

    @media screen and (max-width:425px){
        width:88%;
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
    }
`

const Content = styled.div`
    width:100%;
    margin-top:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color:blue;
    background-color:rgb(55,55,55,9%);
    padding-top: 40px;
    padding-bottom: 50px;

    h1{
        color:#003399;
        font-size: 30px;
        font-weight: bold;
    }

    @media screen and (max-width:768px){
        width:100%;
        justify-content:center;
        align-items:center;
    }

    @media screen and (max-width:499px){
        width:100%;
        justify-content:center;
        align-items:center;

        h1{
            font-size:19px;
        }
    }

    @media screen and (max-width:658px){
        padding-top:20px;
    }
`