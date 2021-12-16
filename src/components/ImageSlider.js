import React from 'react';
import Slider from 'react-slick';
import sliderImage1 from '../images/slider/1.png';
import sliderImage2 from '../images/slider/2.png';
import sliderImage3 from '../images/slider/4.png';
import sliderImage4 from '../images/slider/5.png';
import sliderImage5 from '../images/slider/6.png';
import sliderImage6 from '../images/slider/7.png';

const ImageSlider = () => {
  const settings = {
    className: 'center',
    vertical: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    verticalSwiping: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
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
      <div
        className='image__slider py-12 px-4'
        data-aos='fade-right'
        data-aos-duration='1200'
      >
        <Slider {...settings}>
          <div className='mx-2'>
            <img src={sliderImage1} alt='' className='max-w-full' />
          </div>

          <div className='mx-2'>
            <img src={sliderImage2} alt='' className='max-w-full' />
          </div>

          <div className='mx-2'>
            <img src={sliderImage3} alt='' className='max-w-full' />
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
        </Slider>
      </div>
    </>
  );
};

export default ImageSlider;
