import React from 'react';
import BlogLink from './BlogLink/BlogLink';
import Datas from './Datas/Datas';
import Gallery from './Gallery/GaleryFlip';
import OurImpact from './ImpactHold/OurImpact';
import Mission from './MissionHold/Mission';
import OurStory from './OurStory/OurStory';
import { Slide } from './Slider/Slide';
import Support from './Support/Support';
import { Volunteer } from './Volunteer/Volunteer';

const Home = () => {
  return (
    <>
        <Slide />
        <Mission />
        <br/>
        <br/>
        <OurImpact />
        <br/>
        <OurStory />
        <br/>
        <Datas />
        <br/>
        <Support />
        <br/>
        <br/>
        <br/>
        <Volunteer />
        <br/>
        <BlogLink />
        <br/>
        <Gallery />
        <br/>
        <br/>
    </>
  )
}

export default Home;
