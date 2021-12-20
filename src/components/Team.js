import React from 'react';
import image1 from '../assets/images/about.png';
import image2 from '../assets/images/about.png';
import image3 from '../assets/images/about.png';

const Team = () => {
  return (
    <>
      <div className='team lg:mt-24 py-12 bg-[#032452e3]' id='team'>
        <div className='container mx-auto'>
          <div className='team__inner px-6'>
            <h1 className='font-bold text-2xl text-center pb-6 lg:pb-12 text-white lg:text-center lg:text-3xl uppercase '>
              Our Team
            </h1>
            <div className='team__wrapper grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8'>
              <div
                className='team__content  border-2 border-[#18345a] py-4 px-4 rounded-lg '
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <img src={image1} alt='' className='max-w-full   mx-auto' />
                <h3 className='text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-white'>
                  @jadenpatton1
                </h3>
                <p className='text-center text-white'>
                  Rompercrush - Developer
                </p>
              </div>
              <div
                className='team__content  border-2 border-[#18345a] py-4 px-4 rounded-lg '
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                <img src={image2} alt='' className='max-w-full   mx-auto' />
                <h3 className='text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-white'>
                  @gmute_
                </h3>
                <p className='text-center text-white'>gmute - Community Lead</p>
              </div>
              <div
                className='team__content  border-2 border-[#18345a] py-4 px-4 rounded-lg '
                data-aos='fade-up'
                data-aos-duration='1400'
              >
                <img src={image3} alt='' className='max-w-full   mx-auto' />
                <h3 className='text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-white'>
                  @jaarri
                </h3>
                <p className='text-center text-white'>Jarrii - Marketing</p>
              </div>

              <div
                className='team__content  border-2 border-[#18345a] py-4 px-4 rounded-lg '
                data-aos='fade-up'
                data-aos-duration='1400'
              >
                <img src={image3} alt='' className='max-w-full   mx-auto' />
                <h3 className='text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-white'>
                  @NFTCast
                </h3>
                <p className='text-center text-white'>NFTCasT - Artist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
