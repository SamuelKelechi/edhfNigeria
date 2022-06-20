import React, {useState} from 'react';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../Images/Logo.png'


const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <HeaderContainer>
        <HeaderWrapper>
            <NavLinks to='/' ><LogoImg src={Logo}/></NavLinks>
            <Navs onClick={handleClick} click={click}>
                <NavLinks to='/' >Home</NavLinks>
                <NavLinks to='/about'>About</NavLinks>
                <NavLinks to='/contact'>Contact</NavLinks>
                <NavLinks to='/blog'>Blog</NavLinks>
                <div></div>
                <NavLinks to='/donate'><Button variant="contained" color="success" style={{width:'150px'}} >Donate</Button></NavLinks>
            </Navs>
            <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> :  <FaBars />}
            </MobileIcon>
        </HeaderWrapper> 
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 80px;
box-shadow: 0px 4px 4px 4px rgba(225, 225, 225, 0.5);
z-index: 999;
position: fixed;
top: 0;
background: white;
background: linear-gradient(to right bottom,
    rgba(255, 255, 255,0.7),
    rgba(255, 255, 255, 0.3)
        );
backdrop-filter: blur(1rem);

@media screen and (max-width: 425px){
    position: fixed;
    top:0;
}
`
const HeaderWrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
const LogoImg = styled.img`
width: 70px;

@media screen and (max-width: 425px){
    width: 55px;
}
`
const Navs = styled.div`
display: flex;
width: 600px;
justify-content: space-between;
align-items: center;
font-size: 18px;
font-weight: bold;

@media screen and (max-width: 860px){
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 87px;
    height: 80vh;
    width: 100%;
    justify-content: space-evenly;
    left: ${({click}) => (click ? 0 : '-100%')};
    transition: all 0.8s ease;
    opacity: 0.93;
    background: #003399;
    color: white;
    z-index: 900;
    border-radius: 0 25px 25px 0;
}
`
const NavLinks = styled(Link)`
        text-decoration: none;
        color: inherit;
        border-bottom: 2px solid transparent;

    &:hover{
        border-bottom: 2px solid #003399; 
        transition: all 4s ease;
    }

    @media screen and (max-width: 860px){
        border-bottom: 2px solid transparent;

    &:hover{
        border-bottom: 2px solid whitesmoke; 
        transition: all 4s ease;
    }

    }
`

const MobileIcon = styled.div`
font-size: 30px;
display: none;

@media screen and (max-width: 860px){
display: block                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ;
}
`