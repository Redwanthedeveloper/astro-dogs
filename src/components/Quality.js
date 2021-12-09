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
                  Doodle Punks
                  <br />
                  <br />
                  Doodle Punks is a DAO that brings immense value to the etherum
                  blockchain through the implementation of several high utility
                  functions: Staking our Utility Token, DAO Treasory, &
                  Metaverse Development.
                  <br />
                  <br />
                  The Dao Explained:
                  <br />
                  Our Token is backed by the fractionalized Treasury (Vault) of
                  blue-chip NFTs (Doodles & CryptoPunks). As the value of our
                  Vault increases, the intrinsic value of $CRAYON increases as
                  well. However, It is essential to consider that 1 $CRAYON = 1
                  $CRAYON for eternity. The real value of $CRAYON comes from the
                  utilities within the Doodle Punk ecosystem.
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
              <div className='quality__category'>Generative Doodle Punks</div>
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
