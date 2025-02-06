import React from "react";
import styled from "styled-components";
import Cards from "./TeamCard";
import Ajose from "../Images/ajose.jpeg"
import James from "../Images/james.jpeg"
import Olamide from "../Images/Olamide.jpeg"
import Vanessa from "../Images/vanessa.jpeg"
import Motunrayo from "../Images/motunrayo.jpeg"
import Titilope from "../Images/titilope.jpeg"
import Oluwatoyin from "../Images/Toyin.jpg"
import Emmanuel from "../Images/emmanuel.jpeg"


const Card = () =>{
    return(
        <Content>
            <h1>OUR TEAM</h1>
            <Wrapper>
               <Cards img={Ajose}
                name="Elisha Ajose" 
                text="FOUNDER/CHAIRMAN"
                fullstory=""
               />

               <Cards img={James} 
                name="James Adeleye Adesuyi" 
                text="TREASURER AND ACTING HEAD"/>

               <Cards img={Titilope} 
               name="Titilope Olumofin" 
               text="SECRETARY"/>

               <Cards img={Oluwatoyin} 
               name="Oluwatoyin Alicia Johnson" 
               text="SOCIAL WORKER"/>

               <Cards img={Vanessa} 
               name="Vanessa Linda" 
               text="SOCIAL WORKER"/>

                <Cards img={Motunrayo} 
               name="Motunrayo Ogundipe" 
               text="SOCIAL WORKER"/>

               <Cards img={Olamide} 
               name="Olamide Akingbe" 
               text="SOCIAL WORKER"/>

                <Cards img={Emmanuel} 
               name="Emmanuel Johnson" 
               text="SOCIAL WORKER"/>
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