import React from "react";
import styled from "styled-components";
import Cards from "./TeamCard";
import img1 from "./image/elisha.jpg";
import img2 from "./image/sunday.jpg";
import img3 from "./image/james.jpg";
import img4 from "./image/titi.jpg";
import img5 from "./image/toyin.jpg";



const Card = () =>{
    return(
        <Content>
            <h1>OUR TEAM</h1>
            <Wrapper>
               <Cards img={img1} name="Elisha Ajose" text="FOUNDER/CHAIRMAN"/>
               <Cards img={img3} name="James Adeleye Adesuyi" text="TREASURER"/>
               <Cards img={img2} name="Sanni Sunday Emmanuel" text="SECRETARY"/>
               <Cards img={img4} name="Miss Titilope Olumofin" text="SOCIAL WORKER"/>
               <Cards img={img5} name="Oluwatoyin Alicia Johnson" text="SOCIAL WORKER"/>
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