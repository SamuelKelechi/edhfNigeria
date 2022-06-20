import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {GiFastForwardButton} from 'react-icons/gi';


const TeamCard = ({img,name,text}) =>{
    return(
        <Div>
            <Image src = {img}/>
            <Span>
                <NameTag style={{color:'rgb(0,51,153)'}}>{name}</NameTag>
                <div>{text}</div>
            </Span>
            <div style={{width:'100%', display:'flex', justifyContent:'center'}}><Link to='#'><GiFastForwardButton style={{fontSize:'25px'}}/></Link></div>
        </Div>
    )
}
export default TeamCard;

const Span = styled.div`
    height:60px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    justify-content:space-around;
    align-items:center;
    font-weight:bold;
    div{
        color:#000
    }
`

const Image = styled.img`
    width:100%;
    height:85%;
    background-color:#fff;
    object-fit:cover;
    border-radius:5px;

    @media screen and (max-width:499px){
        width:100%;
        height:85%;
    }
`

const Div = styled.div`
    width:230px;
    height:90%;
    @media screen and (max-width:768px){
        width:290px;
        height:400px;
        margin-bottom:10px;
    }
    @media screen and (max-width:499px){
        width:100%;
        height:450px;
    }
`
const NameTag = styled.div`
    font-size: 18px;
`