import React from 'react';
import incubator from '../images/incubator.png';
import egg from '../images/egg2.png';
import serum from '../images/serum.svg';
import solana from '../images/solana.svg';
import arweave from '../images/arweave.svg';
import metaplex from '../images/metaplex.svg';

const Features = () => {
  return (
    <>
      <div className='features'>
        <div className='features__center center'>
          <h1
            className='features__title d1'
            data-aos='animation-scale-top'
            data-aos-duration='600'
          >
            bitty tweeps are hatching soon
          </h1>
          <div className='features__info'>
            10,101 uniquely adorable bitty tweeps are on their way
            <br />
            to hatch on the Solana blockchain.
          </div>
          <div className='features2__bg'>
            <div className='features2__preview'>
              <img src={incubator} style={{ maxWidth: '700px' }} alt='' />
            </div>
            <div className='features2__preview'>
              <img src={egg} alt='' />
            </div>
          </div>
          <div className='main__partners'>
            <div className='main__info'>
              Powered by Leading and Trusted Next Generation Technologies
            </div>
            <div className='main__list'>
              <div className='main__logo'>
                <img src={serum} alt='' />
              </div>
              <div className='main__logo'>
                <img src={solana} alt='' />
              </div>
              <div className='main__logo'>
                <img src={arweave} alt='' />
              </div>
              <div className='main__logo'>
                <img src={metaplex} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
