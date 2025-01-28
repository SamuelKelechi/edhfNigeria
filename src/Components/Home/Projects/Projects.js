import React from "react";
import { Link } from "react-router-dom";
import ReactCardSlider from 'react-card-slider-component';
import GtBank from '../../Images/gtbank.jpeg';
import EcoBank from '../../Images/Eco.jpg';
import Support from '../../Images/Support.jpg';

const projectData = [
  { id: 1, title: "Clean Water Initiative", image: GtBank, shortDescription: "Providing clean water to rural areas." },
  { id: 2, title: "Education for All", image: EcoBank, shortDescription: "Promoting education for children in need." },
  { id: 3, title: "Support Project for All", image: Support, shortDescription: "Promoting education for children in need." },
  { id: 4, title: "Project 4", image: GtBank, shortDescription: "Another amazing initiative." },
  { id: 5, title: "Project 5", image: EcoBank, shortDescription: "Another inspiring project." },
  { id: 6, title: "Project 6", image: Support, shortDescription: "An impactful project." },
];

const Projects = () => {
  return (
    <>
    <div style={{width:'98%', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h2>OUR PROJECTS</h2>
      <ReactCardSlider slides={projectData}/>
    </div>
    </>
  );
};
export default Projects;
