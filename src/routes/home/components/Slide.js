import React from 'react';
import Slider from 'react-slick';
// import PropTypes from 'prop-types';
import './Slide.scss';
const PosterSlide = ({data}) => {
  const settings = {
    dots: true,
    autoplay: true,
    className: 'posterSlide',
    dotsClass: 'posterSlide__dots'
  };
  return (
    <Slider {...settings}>
      {
        data.map((item, index) => (
            <div key={item.image+index}>
              <img className="posterSlide__image" src={item.image} alt=""/>
            </div>
          )
        )
      }
    </Slider>
  );
};


export default PosterSlide;