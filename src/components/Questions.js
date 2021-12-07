import React from 'react';
import Collapsible from 'react-collapsible';
import book from '../images/book2.png';

const Questions = () => {
  return (
    <>
      <div className='questions'>
        <div className='questions__center center'>
          <div className='questions__preview'>
            <img src={book} alt='' />
          </div>
          <h2
            className='questions__title h2'
            data-aos='animation-scale-top'
            data-aos-duration='600'
          >
            Frequently asked questions
          </h2>
          <div className='questions__list'>
            <div className='questions__item'>
              <Collapsible
                trigger='How can I get a bitty tweep?'
                className='questions__head'
              >
                <div className='questions__body'>
                  Bitty tweeps purchasing happens through our Tweeps Incubator
                  which can be found via the top navigation of the website. When
                  minting starts, connect your wallet and push the incubator
                  button to mint. Follow the simple steps and you will be a
                  proud owner of a bitty tweep!
                </div>
              </Collapsible>
            </div>

            <div className='questions__item'>
              <Collapsible
                trigger='When is the drop? How much does it cost?'
                className='questions__head'
              >
                <div className='questions__body'>
                  The drop date is to be announced in October (follow our social
                  channels for exact times). Mint price is 1 SOL.
                </div>
              </Collapsible>
            </div>
            <div className='questions__item'>
              <Collapsible
                trigger='Can I mint on mobile?'
                className='questions__head'
              >
                <div className='questions__body'>
                  Yes, you will be able to mint through Sollet on your mobile.
                  We recommend connecting via computer with Phantom wallet for
                  most optimal user experience.
                </div>
              </Collapsible>
            </div>
            <div className='questions__item'>
              <Collapsible
                trigger='Is there a limit?'
                className='questions__head'
              >
                <div className='questions__body'>
                  You can mint 1 bitty tweep at a time. You can mint as many
                  times after each transaction.
                </div>
              </Collapsible>
            </div>
            <div className='questions__item'>
              <Collapsible
                trigger='How many traits are there?'
                className='questions__head'
              >
                <div className='questions__body'>
                  There are 7 types of bitty tweeps that have over 156 possible
                  traits across 9 different categories. You wil be able to see
                  them soon in the Traits Explorer section of our website.
                </div>
              </Collapsible>
            </div>
            <div className='questions__item'>
              <Collapsible
                trigger='Do you have a rarity system?'
                className='questions__head'
              >
                <div className='questions__body'>
                  Yes we do! We have a 5-level rarity system ranging from
                  ‘Common’ to 'Ultra Rare.' Traits and their rarity % will be
                  posted in our fun and interactive Traits Explorer section
                  post-launch.
                </div>
              </Collapsible>
            </div>
            <div className='questions__item'>
              <Collapsible
                trigger='Will there be a secondary market?'
                className='questions__head'
              >
                <div className='questions__body'>
                  We are actively looking to partner with a secondary market
                  provider. Please stay tuned for more updates through our
                  social communication channels.
                </div>
              </Collapsible>
            </div>
            <div className='questions__item'>
              <Collapsible
                trigger='Are there secondary sales royalties?'
                className='questions__head'
              >
                <div className='questions__body'>
                  Yes, royalties are set at 4.23%. We will store 10% of the
                  royalties back into the community wallet to further grow the
                  Bitty Tweeps initiatives (subject to review).
                </div>
              </Collapsible>
            </div>
            <div className='questions__item'>
              <Collapsible
                trigger='Do I own the bitty tweep after purchasing?'
                className='questions__head'
              >
                <div className='questions__body'>
                  Full intellectual properties of the bitty tweep are given to
                  the buyer. Welcome to the Coop!
                </div>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
