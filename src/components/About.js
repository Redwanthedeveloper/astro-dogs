import React from 'react';
import aboutGif from '../assets/images/about.png';
const About = () => {
  return (
    <>
      <div
        className='about mt-0 lg:mt-24 py-16 lg:py-24 bg-[#032452e3]'
        id='about'
      >
        <div className='container mx-auto'>
          <div
            className='about__main px-6 grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-y-6 items-center'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='about__image col-span-1 mx-auto w-72'>
              <img src={aboutGif} alt='' className='max-w-full ' />
            </div>
            <div className='about__content col-span-2'>
              <h1 className='font-bold text-4xl text-center pb-6 lg:pb-12 text-white lg:text-left lg:text-5xl'>
                What are Astro Dogs
              </h1>
              <p className='text-center text-white text-base lg:text-left leading-8 lg:text-xl'>
                A collection of 5,555 unique Astro Dog avatars living on the
                Solana network. Each one is algorithmically generated from a
                combination of over 200 individually drawn elements, to create
                legendary collections and 1/1 rarity.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
