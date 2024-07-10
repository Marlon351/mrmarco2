import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable: false,
  };

  return (
    <Carousel {...settings}>
      <img src="/images/pizzabg.jpg" alt="Pizza Background 1" />
      <img src="/images/pizzabg2.jpg" alt="Pizza Background 2" />
      <img src="/images/pizzabg3.jpg" alt="Pizza Background 3" />
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

export default ImgSlider;
