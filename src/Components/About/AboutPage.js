import React from "react";
import styled from "styled-components";
import Card from "./Card"
import OurTeam from "./OurTeam"
import Icon1 from "../Images/icon1.png"
import Icon2 from "../Images/icon2.png"
import Icon3 from "../Images/icon3.png"
import { Link } from "react-router-dom";



const AboutPage = () =>{
    return(
        <Content>
            <LandingPage>
                <Image src = "https://firebasestorage.googleapis.com/v0/b/edhf-nigeria.appspot.com/o/about1.JPG?alt=media&token=4da134c9-3822-4acc-a6af-626d209a5f32"/>
                <OverLayer>
                    <Span>ABOUT US</Span>
                   <Link to='/donate'><Button>Donate</Button></Link> 
                </OverLayer>
            </LandingPage>
            <Cards>
                <br/>
                <Card 
                    discription="Our vision is: building people with dignity and self-worth. 
                    Every human being should have the same opportunity. More than 100 million 
                    Nigerians lack access to basic amenities—from clean water and electricity 
                    quality education and liberty to participate in the economy, as equal 
                    citizens. We are about changing these phenomena." 
                    Title="OUR VISION" 
                    cl="#003399" 
                    icon={Icon1}
                    Info="Our vision is: building people with 
                    dignity and self-worth. Every human being 
                    should have the same opportunity."
                    text="OUR VISION"
                />
                <br/>
                <Card 
                    discription="To advocate for community development, basic human right and
                     welfare. To create platform where every citizen can excel. To empower 
                     and strengthen the striving citizens, through education, vocational 
                     training, and giving financial support. To protect the poor and the needy, 
                     being the voice to the voiceless." 
                    Title="OUR MISION" 
                    cl="#25AAE2" 
                    icon={Icon2}
                    Info="To advocate for community development, 
                    basic human right and welfare. To create platform 
                    where every citizen can excel."
                    text="OUR MISSION"
                    fd="row-reverse"
                    />
                    <br/>
                <Card 
                    discription="Elisha Development and Humanitarian Foundation is a place where you get to bring your full self 
                    to serve, to impact knowledge, and to create values worth emulating, for 
                    the communities we serve. Curiosity, kindness, collaboration, optimism, 
                    courage, creativity, these are some of the qualities that define us as human. 
                    We seek team members with different origins, beliefs, backgrounds and ways of thinking. 
                    Diversity is how we tackle the world’s toughest challenges. We seek responsible, 
                    hard-working and spirited change makers, so if you are young, active and ready to change 
                    the world for the better, we look forward to seeing you join our team so we can serve 
                    humanity together." 
                    Title="OUR VOLUNTEERS/TEAM" 
                    cl="#3AB54A" 
                    icon={Icon3}
                    Info="This is a place where you get to bring your full self, 
                    to serve, to impart knowledge, and to create values worth emulating."
                    text="VOLUNTEER"
                />
            </Cards>
          
            <br />
            <br />

            <OurTeam/>
        </Content>
    );
};
export default AboutPage;

const Cards = styled.div`
    width:100%;
    /* height:100%; */
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`

const Button = styled.button`
    width:100px;
    border:none;
    outline:none;
    height:40px;
    border-radius:7px;
    color:#ffff;
    background-color:#3AB54A;
    margin-top:10px;
    transition:all 590ms;
    transform:scale(1);

    :hover{
        cursor:pointer;
        transform:scale(1.10)
    }
`

const Span = styled.div`
    font-size:25px;
    color:#ffff;
    font-weight:bold;
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
`

const Image = styled.img`
    width:100%;
    height:400px;
    object-fit:cover;
    position: absolute;
`

const LandingPage = styled.div`
    width:100%;
    height:400px;
    background-color:blue;
`

const Content = styled.div`
    width:100%;
    min-height:100vh;
    height:100%;
`