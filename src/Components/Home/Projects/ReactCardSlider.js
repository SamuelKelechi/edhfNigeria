import React from 'react';
import { Link } from "react-router-dom";
import './Slider.css';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';

const ReactCardSlider =(props)=>{
    const slideLeft =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    return(
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div id="slider">
               { 
                props.slides.map((slide,index)=>{
                        return(
                            <Link to={`/project/${slide.id}`}>
                                <div className="slider-card" key={index} >
                                    <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></div>
                                    <p className="slider-card-title">{slide.title}</p>
                                    <span className="slider-card-description">{slide.shortDescription}</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
        </div>
    )
}
export default ReactCardSlider;