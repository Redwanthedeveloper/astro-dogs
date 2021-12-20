import React from 'react';
import Slider from 'react-slick';
import sliderImage1 from '../assets/images/slider/1.png';
import sliderImage2 from '../assets/images/slider/2.png';
import sliderImage4 from '../assets/images/slider/4.png';
import sliderImage5 from '../assets/images/slider/5.png';
import sliderImage6 from '../assets/images/slider/6.png';
import sliderImage7 from '../assets/images/slider/7.png';

const ImageSlider = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          <div className='mx-2'>
            <img src={sliderImage1} alt='' className='max-w-full' />
          </div>

          <div className='mx-2'>
            <img src={sliderImage2} alt='' className='max-w-full' />
          </div>

          <div className='mx-2'>
            <img src={sliderImage4} alt='' className='max-w-full' />
          </div>
          <div className='mx-2'>
            <img src={sliderImage5} alt='' className='max-w-full' />
          </div>
          <div className='mx-2'>
            <img src={sliderImage6} alt='' className='max-w-full' />
          </div>

          <div className='mx-2'>
            <img src={sliderImage7} alt='' className='max-w-full' />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ImageSlider;
