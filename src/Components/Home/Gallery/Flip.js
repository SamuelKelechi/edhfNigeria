import React from 'react';
import styled from 'styled-components';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';



const slideImages = [
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/elisha-foundation.appspot.com/o/visit.jpg?alt=media&token=28790b82-2feb-43d3-9883-0e5822a1c42f',
    // caption: 'Slide 1'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/elisha-foundation.appspot.com/o/award1.jpg?alt=media&token=d05e1e28-a2a0-4630-bb6b-680b1002af9e',
    // caption: 'Slide 2'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/elisha-foundation.appspot.com/o/finalist.jpg?alt=media&token=f7980ead-a547-4629-8356-b8f3dabc3db9',
    // caption: 'Slide 3'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/elisha-foundation.appspot.com/o/feed.jpg?alt=media&token=cf967a8b-7e77-48fd-b737-f43e69b6a6cf',
    // caption: 'Slide 5'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/elisha-foundation.appspot.com/o/distribute.jpg?alt=media&token=7910dd3a-e5d3-4ea7-829d-06df92177c0a',
    // caption: 'Slide 6'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/elisha-foundation.appspot.com/o/dfts.jpg?alt=media&token=442abbde-f1bd-4fb0-9951-4f5b273acc32',
    // caption: 'Slide 7'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/elisha-foundation.appspot.com/o/clean.jpg?alt=media&token=8a641c7b-622e-4841-8a0c-0fcf63ca95c3',
    // caption: 'Slide 8'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/elisha-foundation.appspot.com/o/believe.jpg?alt=media&token=d4ca1e08-5dcf-4a0b-9d42-4a3fc1a8e8ce',
    // caption: 'Slide 9'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/elisha-foundation.appspot.com/o/meeting.jpg?alt=media&token=e4e295cf-023e-4354-b466-88a51c2d7731',
    // caption: 'Slide 10'
  },
];

const Flip = () => {
    return (
      <Container >
        <Fade style={{width: "100%", height:"100%"}}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index} style={{width: "100%", height:"500px"}}>
              <div style={{width: "100%", height:"450px", backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat", objectFit:"cover", borderRadius: "8px", 'backgroundImage': `url(${slideImage.url})`}}>
                {/* <span>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Fade>
      </Container>
    )
}

export default Flip;

const Container = styled.div`
height: 100%;
width: 100%;
display:flex;
flex-direction: column;
justify-content: center;
border-radius: 8px;
`