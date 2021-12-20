import React from 'react';
import rarityImage from '../assets/images/rarity.png';
const Rarity = () => {
  return (
    <>
      <div className='rarity mt-24' id='rarity'>
        <div className='container mx-auto px-4'>
          <div className='rarity__top grid grid-cols-1 lg:grid-cols-3 lg:gap-6 px-6 items-center'>
            <div
              className='rarity__content lg:col-span-2'
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              <h1 className='font-normal text-4xl text-center pb-6 lg:pb-12 text-default lg:text-left lg:text-5xl'>
                Each Toadle is unique and special!
              </h1>
              <p className='text-center text-default text-base lg:text-left leading-8 lg:text-xl'>
                Toadle is generated from over 40 attributes based on rarity. It
                is never the same. From skin, background, hats, outfit,
                accessory the rarer the attributes, the rater your toadle will
                be!
                <br />
                Some of their fashions may not be the as a set because it is
                generated randomly so each toadle has special value.
                <br />
                <br />
                <span>Check out the rarity list below!</span>
              </p>
            </div>
            <div
              className='rarity__image self-center lg:col-span-1 mx-auto'
              data-aos='fade-left'
              data-aos-duration='1000'
            >
              <img src={rarityImage} alt='' className='max-w-full' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rarity;
