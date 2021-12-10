import React from 'react';
import boxImage from '../images/hero.png';
const Dao = () => {
  return (
    <>
      <section className='dao' id='dao'>
        <div className='pricing'>
          <div className='pricing__center center'>
            <h2
              className='pricing__title h2'
              data-aos='animation-scale-top'
              data-aos-duration={600}
            >
              Community DAO
            </h2>
            <div className='download__info'>
              By owning $CRAYON, you own a % of the fractional vault. If the
              vault were to be sold (via a buyout), the gains would be
              distributed to the $CRAYON token holders. DAO: <br /> <br />
              We will purchase and fractionalize our parent blue chip NFTs,
              CryptoPunks and Doodles. 80% of mint sales and 75% of royalties
              goes to the DAO. DoodlePunk DAO members receive $CRAYON utility
              tokens representing the fractional shares of NFTs held in the
              community vault. Members also get exclusive access to the DAO
              community, Symphony’s clutch crypto memes, and voting rights over
              the DAO's assets. Join Doodle Punks now, and Moon with us.
            </div>
          </div>
        </div>
        <div className='options dao__options'>
          <div className='options__center center'>
            <div className='options__wrap'>
              <div className='options__list'>
                <div className='options__item'>
                  <div className='options__info'>
                    <img src={boxImage} alt='' />
                  </div>
                  <div className='options__info'>
                    Staking <br />
                  </div>
                  <div className='options__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, eum?
                  </div>
                </div>
                <div className='options__item'>
                  <div className='options__info'>
                    <img src={boxImage} alt='' />
                  </div>
                  <div className='options__info'>
                    Voting <br />
                  </div>
                  <div className='options__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, eum?
                  </div>
                </div>
                <div className='options__item'>
                  <div className='options__info'>
                    <img src={boxImage} alt='' />
                  </div>
                  <div className='options__info'>
                    Vault <br />
                  </div>
                  <div className='options__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, eum?
                  </div>
                </div>
                <div className='options__item'>
                  <div className='options__info'>
                    <img src={boxImage} alt='' />
                  </div>
                  <div className='options__info'>
                    Vault <br />
                  </div>
                  <div className='options__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, eum?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dao;
