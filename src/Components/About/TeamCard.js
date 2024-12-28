import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {GiFastForwardButton} from 'react-icons/gi';


const TeamCard = ({img,name,text,avat,fullstory}) =>{
    const [show, setShow] = React.useState(false)


    const handleShow = () =>{
        setShow(!show)
    }

    return(
        <Div>
            <Image src = {img}/>
            <Span>
                <NameTag style={{color:'rgb(0,51,153)'}}>{name}</NameTag>
                <div>{text}</div>
            </Span>
            <div style={{width:'100%', display:'flex', justifyContent:'center'}}><Link onClick={handleShow}><GiFastForwardButton style={{fontSize:'25px'}}/></Link></div>
           {show ? ( 
                    <PopsUp>
                        <FullImage src={avat}/>
                        <ProfHolder>
                            {fullstory}
                        </ProfHolder>
                        <Link onClick={handleShow}><button>Back</button></Link>
                    </PopsUp>
                ) : null}
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
        margin-bottom:25px;
    }
`
const NameTag = styled.div`
    font-size: 18px;
`
const PopsUp = styled.div`
    width: 80%;
    top: 80px;
    background-color: red;
    position: absolute;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    overflow-y: auto;
`
const FullImage = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    object-position: center;
    border-radius:8px;
`
const ProfHolder = styled.p`
    width: 90%
`