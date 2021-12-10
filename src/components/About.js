import React from 'react';
import cryptin from '../images/team/cryptin.jpg';
import symphony from '../images/team/symphony.jpg';
import defi from '../images/team/defi.png';
import gabi from '../images/team/gabi.png';

const About = () => {
  return (
    <>
      <div className='about' id='team'>
        <div className='about__center center'>
          <div className='about__list'></div>
          <div className='about__wrap'>
            <h2
              className='questions__title h2'
              data-aos='animation-scale-top'
              data-aos-duration='600'
            >
              Team
            </h2>
            {/* <div
              className='about__info'
              data-aos='animation-scale-top'
              data-aos-duration='600'
            >
              <span>❤</span> HQ All-Stars
            </div> */}
            <div className='about__team'>
              <div className='about__user'>
                <div className='about__ava'>
                  <a href='#.'>
                    <img src={cryptin} alt='' />
                  </a>
                </div>
                <div className='about__category'>
                  <a href='https://twitter.com/NFTcryptin'>@NFTcryptin</a>
                </div>
                <div className='about__post'>Cryptin - Developer</div>
              </div>
              <div className='about__user'>
                <div className='about__ava'>
                  <a href='https://twitter.com/NFTsym'>
                    <img src={symphony} alt='' />
                  </a>
                </div>
                <div className='about__category'>
                  <a href='https://twitter.com/NFTsym'>@NFTsym</a>
                </div>
                <div className='about__post'>Symphony - Community Lead </div>
              </div>
              <div className='about__user'>
                <div className='about__ava'>
                  <a href='https://twitter.com/Defi_Dood'>
                    <img src={defi} alt='' />
                  </a>
                </div>
                <div className='about__category'>
                  <a href='https://twitter.com/Defi_Dood'>@Defi_Dood</a>
                </div>
                <div className='about__post'>Defi Dood - Marketing </div>
              </div>
              <div className='about__user'>
                <div className='about__ava'>
                  <a href='https://twitter.com/Boeroiu2'>
                    <img src={gabi} alt='' />
                  </a>
                </div>
                <div className='about__category'>
                  <a href='https://twitter.com/Boeroiu2'>@Boeroiu2</a>
                </div>
                <div className='about__post'>Gabi - Artist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
