import { Carousel } from 'antd';
import React from 'react';
import './Carousel.scss'
import "antd/dist/antd.css";

const contentStyle = {
  maxHeight: '480px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  width: '100%',
  objectFit: 'fill',
};

const CarouselSection = () => {
  const state = {
    dotPosition: 'left',
  };
  const { dotPosition } = state;
    return (
        <Carousel dotPosition={dotPosition} autoplay effect="fade" className="carousel-container">
          <div>
            <img style={contentStyle} src={window.location.origin + '/assets/images/1.jpg'} alt="Carousel_1"/>
          </div>
          <div>
            <img style={contentStyle} src={window.location.origin + '/assets/images/2.jpg'} alt="Carousel_2"/>
          </div>
          <div>
            <img style={contentStyle} src={window.location.origin + '/assets/images/3.jpg'} alt="Carousel_3"/>
          </div>
          <div>
            <img style={contentStyle} src={window.location.origin + '/assets/images/4.jpg'} alt="Carousel_4"/>
          </div>
          <div>
            <img style={contentStyle} src={window.location.origin + '/assets/images/5.jpg'} alt="Carousel_5"/>
          </div>
        </Carousel>
    );
}

export default CarouselSection;