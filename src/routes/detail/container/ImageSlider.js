import React, { Component } from 'react';
import Slider from 'react-slick';
import './ImageSlider.scss';


class ImageSlider extends Component {
  state = {
    index: 1
  }

  changeIndex = index => {
    this.setState({
      index: index + 1
    });
  }
  render () {
    const settings = {
      className: 'imageSlider__content',
      afterChange: this.changeIndex
    };
    return (
      <div className="imageSlider" onClick={this.props.onClose}>
        <div className="imageSlider__index">
          { this.state.index } / 6
        </div>
        <Slider {...settings}>
          <div className="imageSlider__item">
            <img className="imageSlider__img" src="/source/image/asset1.jpeg" alt=""/>
          </div>
          <div className="imageSlider__item">
            <img className="imageSlider__img" src="/source/image/asset2.jpeg" alt=""/>
          </div>
          <div className="imageSlider__item">
            <img className="imageSlider__img" src="/source/image/asset3.jpeg" alt=""/>
          </div>
          <div className="imageSlider__item">
            <img className="imageSlider__img" src="/source/image/asset4.jpeg" alt=""/>
          </div>
          <div className="imageSlider__item">
            <img className="imageSlider__img" src="/source/image/asset5.jpeg" alt=""/>
          </div>
          <div className="imageSlider__item">
            <img className="imageSlider__img" src="/source/image/asset6.jpeg" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }

}

export default ImageSlider;