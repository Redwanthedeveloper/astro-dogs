import React from 'react';
import twitter from '../images/twitter.jpg';
const About = () => {
  return (
    <>
      <div className='about'>
        <div className='about__center center'>
          <div className='about__list'></div>
          <div className='about__wrap'>
            <h2
              className='questions__title h2'
              data-aos='animation-scale-top'
              data-aos-duration='600'
            >
              bitty tweeps team
            </h2>
            <div
              className='about__info'
              data-aos='animation-scale-top'
              data-aos-duration='600'
            >
              <span>❤</span> HQ All-Stars
            </div>
            <div className='about__team'>
              <div className='about__user'>
                <div className='about__ava'>
                  <a href='#.' target='_blank'>
                    <img src={twitter} alt='' />
                  </a>
                </div>
                <div className='about__category'>
                  <a href='#.' target='_blank'>
                    @mrtweeps23
                  </a>
                </div>
                <div className='about__post'>Chief Tweeps Servant</div>
              </div>
              <div className='about__user'>
                <div className='about__ava'>
                  <a href='#.' target='_blank'>
                    <img src={twitter} alt='' />
                  </a>
                </div>
                <div className='about__category'>
                  <a href='#.' target='_blank'>
                    @tweeeeeb
                  </a>
                </div>
                <div className='about__post'>Development Guru</div>
              </div>
              <div className='about__user'>
                <div className='about__ava'>
                  <a href='#.' target='_blank'>
                    <img src={twitter} alt='' />
                  </a>
                </div>
                <div className='about__category'>
                  <a href='#.' target='_blank'>
                    @tweepsieroll
                  </a>
                </div>
                <div className='about__post'>Tweeps Designer</div>
              </div>
              <div className='about__user'>
                <div className='about__ava'>
                  <a href='#.' target='_blank'>
                    <img src={twitter} alt='' />
                  </a>
                </div>
                <div className='about__category'>
                  <a href='#.' target='_blank'>
                    @tweepsndips
                  </a>
                </div>
                <div className='about__post'>Tweeps Updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
