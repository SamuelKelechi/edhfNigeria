import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-video-js-player';
import { Player } from 'video-react';
import { Button } from "@mui/material";


const OurStory = () => {
  return (
    <>                                                             
    <Container>
        <Wrapper>
            <Youtubes >
                <iframe  src="https://www.youtube.com/embed/b0pzF2N_0Gk" title="Elisha Foundation Interview" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{borderRadius:"8px"}}></iframe>
                <br/>
                <a href='https://www.youtube.com/channel/UCMvjWigEfvGLvBusp22YxEw/videos' target='blank' style={{textDecoration:'none'}}><Button variant="outlined" style={{color:'black', border:'1px solid #003399'}}>Watch More</Button></a> 
            </Youtubes>
          
            <Right>
                <h2>ENRICHING LIVES WITH HOPE, BRINGING JOY AND PEACE TO THE NEEDY</h2>
                <p>
                With joy, Elisha Foundation team checked on Mrs. Dorathy Balogun and Miss Amina Isah, who are both beneficiaries of Elisha Elderly care services. 
                <br/>
                Even though the Elisha Elderly care services is primary target at aged people, Amina Isah; 16 years old is able to benefit from the program because her widowed mother could not provide the needed care for her after she was diagnosed with disseminated tuberculosis, which made her emaciated and weak, thus unable to continue with her regular school activities. Amina had been a vibrant and fore student before this condition became her realities. Amina’s mum: Mrs. Aishat Isah spoke about the roles Elisha foundation played to ease their pain and burden, and to help Amina Isah return to school. 
                <br/>
                Mrs. Dorathy Balogun who is unable to walk due to her medical condition, and is mostly without adult help around, is a beneficiary of Elisha Foundation Elderly care services. She explained the amount of pain she has had and the struggles to accept to have to live in this condition of being unable to move around freely as she used to. The roles Elisha Foundation has played to help her restore her health, and to help her live more comfortably.
                </p>
            </Right>
        </Wrapper>
    </Container>
    </>
  )
}
export default OurStory;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 25px;
`
const Youtubes = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;

    iframe{
        width: 100%;
        height: 320px;
    }

    @media screen and (max-width: 768px){
        width: 100%
    }
`

const Wrapper = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap
` 

const Right = styled.div`
    width: 45%;

    h2{
        font-size: 18px;
    }

    @media screen and (max-width: 768px){
        width: 95%;
        margin-top: 15px;
    }
  
`