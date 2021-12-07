import React from 'react';
import rocket2 from '../images/rocket2.svg';

const Pricing = () => {
  return (
    <>
      <div className='pricing'>
        <div className='pricing__center center'>
          <h2
            className='pricing__title h2'
            data-aos='animation-scale-top'
            data-aos-duration={600}
          >
            Bitty Tweeps Roadmap
          </h2>
          <div className='download__info'>
            We are committed to progressively building, expanding and evolving
            Bitty&nbsp;Tweeps&nbsp;through innovation, creativity and community
            solidarity.
          </div>
          <div
            className='about__preview aos-animate'
            data-aos='animation-translate-up'
            data-aos-duration={1000}
            data-data-aos-delay={600}
          >
            <object
              type='image/svg+xml'
              style={{ maxWidth: '300px', display: 'block', margin: 'auto' }}
              data={rocket2}
            >
              <img src={rocket2} style={{ maxWidth: '150px' }} alt='' />
            </object>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
