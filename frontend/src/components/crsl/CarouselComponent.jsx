// CarouselComponent.jsx
import React from 'react';
import { useNavigate } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselComponent.css';
import { NextArrow, PrevArrow } from './ArrowComponent';

// Import images
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';


const CarouselComponent = () => {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src={slide1} alt="First slide" />
          <div className="carousel-text"><h1>Welcome to our Vaarush E-learning Platform</h1>
          <p>Learn, Grow, Excel</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={slide3} alt="Second slide" />
          <div className="carousel-text"></div>
        </div>
       
      </Slider>
    </div>
  );
};

export default CarouselComponent;
