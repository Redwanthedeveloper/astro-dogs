import React from 'react';
import astro2 from '../images/astro2.svg';
const Quality = () => {
  return (
    <>
      <div className='quality'>
        <div className='quality__center center'>
          <div className='share__container'>
            <div className='quality__bg' />
            <div className='share__row'>
              <div className='share__col'>
                <h4 className='share__title h2'>Turning Up Good&nbsp;Vibes</h4>
                <div className='share__text h7'>
                  Tweep tweep!
                  <br />
                  <br />
                  Bitty Tweeps are the new digital pop art darlings of the
                  Solana NFTs. We are playful, colorful, and downright adorable.
                  Our goal is to bring joy, happiness, and overall positivity to
                  the world.
                  <br />
                  <br />
                  Collectively, we are 10101 itty bitty tweeps strong and the
                  growing community is affectionately referred to as “The Coop.”
                  Join our exciting journey to take over the metaverse and the
                  real&nbsp;universe. Tweep tweep!
                </div>
              </div>
              <div className='share__col'>
                <h4 className='share__title h4'>
                  <object
                    type='image/svg+xml'
                    style={{
                      maxWidth: '370px',
                      display: 'block',
                      margin: 'auto',
                    }}
                    data={astro2}
                  >
                    <img
                      src={astro2}
                      style={{ maxWidth: '370px', width: '100%' }}
                      alt=''
                    />
                  </object>
                </h4>
              </div>
            </div>
          </div>
          <div className='quality__bottom'>
            <div className='quality__item'>
              <div className='quality__counter'>10101</div>
              <div className='quality__category'>Generative Bitty Tweeps</div>
            </div>
            <div className='quality__item'>
              <div className='quality__counter'>156</div>
              <div className='quality__category'>Unique Attributes</div>
            </div>
            <div className='quality__item'>
              <div className='quality__counter'>
                1<span className='quality__sign quality__sign_down'>◎</span>
              </div>
              <div className='quality__category'>Solana to Mint</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quality;
