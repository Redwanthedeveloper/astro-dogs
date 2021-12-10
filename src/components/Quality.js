import React from 'react';
import astro2 from '../images/about.png';
const Quality = () => {
  return (
    <>
      <div className='quality'>
        <div className='quality__center center'>
          <div className='share__container'>
            <div className='quality__bg' />
            <div className='share__row'>
              <div className='share__col'>
                <h4 className='share__title h2'>What are Doodle Punks</h4>
                <div className='share__text h7'>
                  <br />A collection of 9,999 unique Doodle Punk avatars living
                  on the Ethereum blockchain. Each one is algorithmically
                  generated from a combination of over 200 individually drawn
                  elements, to create legendary collections and 1/1 rarity.
                  <br />
                  <br />
                  The Doodle Punks project is being developed with long-term,
                  metaverse implementation in mind.From inception, the founders
                  have envisioned 3D application, customizable features, and
                  monetization elements to fully capitalize on the future of
                  digital interaction & ownership.
                </div>
              </div>
              <div className='share__col'>
                <h4 className='share__title h4'>
                  <img
                    src={astro2}
                    style={{ maxWidth: '370px', width: '100%' }}
                    alt=''
                  />
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
