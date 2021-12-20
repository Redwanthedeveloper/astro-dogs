import React from 'react';
import skin1 from '../assets/images/skin/1.png';
import skin2 from '../assets/images/skin/2.png';
import skin3 from '../assets/images/skin/3.png';
import skin4 from '../assets/images/skin/4.png';
import skin5 from '../assets/images/skin/5.png';
import skin6 from '../assets/images/skin/6.png';
import skin7 from '../assets/images/skin/7.png';
import skin8 from '../assets/images/skin/8.png';
import skin9 from '../assets/images/skin/9.png';
import skin10 from '../assets/images/skin/10.png';

import bg1 from '../assets/images/background/1.png';
import bg2 from '../assets/images/background/2.png';
import bg3 from '../assets/images/background/3.png';
import bg4 from '../assets/images/background/4.png';
import bg5 from '../assets/images/background/5.png';

import outfit1 from '../assets/images/outfit/1.png';
import outfit2 from '../assets/images/outfit/2.png';
import outfit3 from '../assets/images/outfit/3.png';
import outfit4 from '../assets/images/outfit/4.png';
import outfit5 from '../assets/images/outfit/5.png';

import hat1 from '../assets/images/hat/1.png';
import hat2 from '../assets/images/hat/2.png';
import hat3 from '../assets/images/hat/3.png';
import hat4 from '../assets/images/hat/4.png';
import hat5 from '../assets/images/hat/5.png';
import hat6 from '../assets/images/hat/6.png';
import hat7 from '../assets/images/hat/7.png';
import hat8 from '../assets/images/hat/8.png';
import hat9 from '../assets/images/hat/9.png';
import hat10 from '../assets/images/hat/10.png';

import accessory1 from '../assets/images/accessory/1.png';
import accessory2 from '../assets/images/accessory/2.png';
import accessory3 from '../assets/images/accessory/3.png';
import accessory4 from '../assets/images/accessory/4.png';
import accessory5 from '../assets/images/accessory/5.png';
import accessory6 from '../assets/images/accessory/6.png';
import accessory7 from '../assets/images/accessory/7.png';
import accessory8 from '../assets/images/accessory/8.png';
import accessory9 from '../assets/images/accessory/9.png';
import accessory10 from '../assets/images/accessory/10.png';
import accessory11 from '../assets/images/accessory/11.png';

const RarityItems = () => {
  return (
    <>
      <div className='py-12 lg:mt-24 rarity__items' id='attributes'>
        <div className='container mx-auto'>
          <div
            className='items__wrapper'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h1 className='text-center text-default text-2xl lg:text-3xl pt-12 lg:pt-16 font-bold uppercase'>
              skins
            </h1>
            <div className='item__list grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6 px-6'>
              <div className='item flex flex-col items-center justify-center'>
                <img src={skin1} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  Black
                </h2>
                <p className='text-center font-normal text-gray-200'>6.15%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={skin2} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  Blue
                </h2>
                <p className='text-center font-normal text-gray-200'>6.59%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={skin4} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  Gray
                </h2>
                <p className='text-center font-normal text-gray-200'>8.13%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={skin5} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  Green
                </h2>
                <p className='text-center font-normal text-gray-200'>9.32%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={skin9} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  White
                </h2>
                <p className='text-center font-normal text-gray-200'>10.51%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={skin7} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  Pink
                </h2>
                <p className='text-center font-normal text-gray-200'>10.87%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={skin8} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  Red
                </h2>
                <p className='text-center font-normal text-gray-200'>11.91%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={skin3} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  Brown
                </h2>
                <p className='text-center font-normal text-gray-200'>11.93%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={skin10} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  Yellow
                </h2>
                <p className='text-center font-normal text-gray-200'>12.25%</p>
              </div>
              <div className='item flex flex-col items-center justify-center'>
                <img src={skin6} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  Orange
                </h2>
                <p className='text-center font-normal text-gray-200'>12.34%</p>
              </div>
            </div>
          </div>

          <div
            className='items__wrapper'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h1 className='text-center text-default text-2xl lg:text-3xl py-12 lg:pt-16 font-bold uppercase'>
              Backgrounds
            </h1>
            <div className='item__list grid grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-6 px-6'>
              <div className='item flex flex-col items-center justify-center'>
                <img src={bg5} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  sky
                </h2>
                <p className='text-center font-normal text-gray-200'>12.98%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={bg1} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  confetit
                </h2>
                <p className='text-center font-normal text-gray-200'>16.60%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={bg2} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  forest
                </h2>
                <p className='text-center font-normal text-gray-200'>22.62%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={bg3} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  grass
                </h2>
                <p className='text-center font-normal text-gray-200'>23.15%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={bg4} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  leaf
                </h2>
                <p className='text-center font-normal text-gray-200'>24.65%</p>
              </div>
            </div>
          </div>

          <div
            className='items__wrapper'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h1 className='text-center text-default text-2xl lg:text-3xl py-12 lg:pt-16 font-bold uppercase'>
              hats
            </h1>
            <div className='item__list grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6 px-6'>
              <div className='item flex flex-col items-center justify-center'>
                <img src={hat1} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  astronaut
                </h2>
                <p className='text-center font-normal text-gray-200'>4.15%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={hat8} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  magician
                </h2>
                <p className='text-center font-normal text-gray-200'>4.16%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={hat2} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  cap
                </h2>
                <p className='text-center font-normal text-gray-200'>10.32%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={hat10} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  propeller
                </h2>
                <p className='text-center font-normal text-gray-200'>10.39%</p>
              </div>
              <div className='item flex flex-col items-center justify-center'>
                <img src={hat4} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  devil
                </h2>
                <p className='text-center font-normal text-gray-200'>10.90%</p>
              </div>
              <div className='item flex flex-col items-center justify-center'>
                <img src={hat6} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  flower
                </h2>
                <p className='text-center font-normal text-gray-200'>11.18%</p>
              </div>
              <div className='item flex flex-col items-center justify-center'>
                <img src={hat5} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  fedora
                </h2>
                <p className='text-center font-normal text-gray-200'>11.56%</p>
              </div>
              <div className='item flex flex-col items-center justify-center'>
                <img src={hat7} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  halo
                </h2>
                <p className='text-center font-normal text-gray-200'>12.19%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={hat9} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  pirate
                </h2>
                <p className='text-center font-normal text-gray-200'>12.24%</p>
              </div>
              <div className='item flex flex-col items-center justify-center'>
                <img src={hat3} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  crown
                </h2>
                <p className='text-center font-normal text-gray-200'>12.91%</p>
              </div>
            </div>
          </div>

          <div
            className='items__wrapper'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h1 className='text-center text-default text-2xl lg:text-3xl py-12 lg:pt-16 font-bold uppercase'>
              outfit
            </h1>
            <div className='item__list grid grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-6 px-6'>
              <div className='item flex flex-col items-center justify-center'>
                <img src={outfit4} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  spacesuit
                </h2>
                <p className='text-center font-normal text-gray-200'>10.04%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={outfit5} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  Suit
                </h2>
                <p className='text-center font-normal text-gray-200'>15.49%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={outfit2} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  Hoodie
                </h2>
                <p className='text-center font-normal text-gray-200'>24.01%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={outfit1} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  casual
                </h2>
                <p className='text-center font-normal text-gray-200'>25.13%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={outfit3} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  kimono
                </h2>
                <p className='text-center font-normal text-gray-200'>25.33%</p>
              </div>
            </div>
          </div>

          <div
            className='items__wrapper'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h1 className='text-center text-default text-2xl lg:text-3xl py-12 lg:pt-16 font-bold uppercase'>
              accessory
            </h1>
            <div className='item__list grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6 px-6'>
              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory11} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  wings
                </h2>
                <p className='text-center font-normal text-gray-200'>1.44%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory2} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  cigar
                </h2>
                <p className='text-center font-normal text-gray-200'>4.00%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory4} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  gum
                </h2>
                <p className='text-center font-normal text-gray-200'>7.46%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory5} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  lolipop
                </h2>
                <p className='text-center font-normal text-gray-200'>9.15%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory3} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  glasses
                </h2>
                <p className='text-center font-normal text-gray-200'>10.14%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory7} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  necklace
                </h2>
                <p className='text-center font-normal text-gray-200'>10.65%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory8} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  petal
                </h2>
                <p className='text-center font-normal text-gray-200'>10.74%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory6} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  mustache
                </h2>
                <p className='text-center font-normal text-gray-200'>11.21%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory9} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  pipe
                </h2>
                <p className='text-center font-normal text-gray-200'>11.37%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory1} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  blossom
                </h2>
                <p className='text-center font-normal text-gray-200'>11.87%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory10} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-default uppercase'>
                  ribbon
                </h2>
                <p className='text-center font-normal text-gray-200'>11.97%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RarityItems;
