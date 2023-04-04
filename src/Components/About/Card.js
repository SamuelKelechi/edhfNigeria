import React from "react";
import styled from "styled-components"

const Card = ({fd,discription,cl,Title,icon,Info,text}) =>{
    return(
        <Content fd = {fd}>
            <BoxHolder cl = {cl}>
                <Icon src={icon}/>
                <Text> 
                    <h3>{text}</h3>
                    {Info}
                </Text>
            </BoxHolder>
            <Discription style={{textAlign:'left'}}>
                <h3>{Title}</h3>
                {discription}
            </Discription>
        </Content>
    )
}
export default Card;

const Text = styled.div`
    width:90%;
    display:flex;
    justify-content:center;
    text-align:center;
    align-items:center;
    flex-direction:column;
    font-size:14px;

    h3{
        font-size:20px;
        color: white;
    }

`

const Icon = styled.img`
`

const Discription = styled.div`
    width:64%;
    font-size:18px;
    display:flex;
    flex-direction:column;
    justify-content:center;

    h3{
        margin-top:0px;
        font-size:25px;
        color:blue;
    }

    @media screen and (max-width:768px){
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        text-align:left;
        word-brake:brake-all;
        margin-top: 20px;
    }

    @media screen and (max-width:499px){
        /* height:230px; */
        margin-top: 20px;
        h3{
            font-size:16px;
            color:blue;
        }
    }

    
    @media screen and (max-width:920px){
        text-align:left;
        width:100%;
    }

    @media screen and (max-width:942px){
        text-align:center;
        width:100%;
    }

    @media screen and (max-width:955px){
        width:90%;
        font-size: 16px;
        justify-content:center;
        align-items:center;
    }
`

const BoxHolder = styled.div`
    width:300px;
    height:220px;
    background-color:${({cl})=>cl};
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-radius:5px;
    color:#fff;

    @media screen and (max-width:768px){
        width:300px;
        height:200px;
        background-color:${({cl})=>cl};
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }

    @media screen and (max-width:499px){
        font-size:10px;
        margin-bottom:10px;
    }
`

const Content = styled.div`
    width:90%;
    // height:250px;
    margin-top:30px;
    display:flex;
    flex-wrap:wrap;
    flex-direction:${({fd})=> fd};
    justify-content:space-between;

    @media screen and (max-width:955px){
        width:90%;
        // height:100%;
        justify-content:center;
        align-items:center;
    }

`