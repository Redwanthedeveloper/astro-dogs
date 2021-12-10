import React from 'react';
import Collapsible from 'react-collapsible';
import book from '../images/book2.png';

const Questions = () => {
  return (
    <>
      <div className='questions' id='faq'>
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
                trigger='When is the mint?'
                className='questions__head'
              >
                <div className='questions__body'>
                  The exclusive whitelist presale will begin on Dec 11th @ 6pm
                  CET (12pm EST). Public sale will open Dec 12th @ 6pm CET.
                </div>
              </Collapsible>
            </div>
            <div className='questions__item'>
              <Collapsible
                trigger='How much will it cost?'
                className='questions__head'
              >
                <div className='questions__body'>
                  Each NFT will be .06 ETH for our Whitelist community, and .07
                  ETH for the public sale. Gas fees not included and will vary.
                </div>
              </Collapsible>
            </div>

            <div className='questions__item'>
              <Collapsible
                trigger='What is Staking?'
                className='questions__head'
              >
                <div className='questions__body'>
                  When you buy a Doodle Punks NFT, you have the option to stake
                  it. Staking is the mechanism by which fractional shares of the
                  DAO community’s vault of NFTs are distributed. These fractions
                  are distributed daily to holders in the form of our native
                  $CRAYON token. Each Doodle Punk NFT can be staked to earn 10
                  $CRAYON's per day. $CRAYON tokens can also be traded on the
                  secondary market via SushiSwap.
                </div>
              </Collapsible>
            </div>

            <div className='questions__item'>
              <Collapsible
                trigger='What is CRAYON?'
                className='questions__head'
              >
                <div className='questions__body'>
                  $CRAYONs are a key part of the Doodle Punks project, and will
                  have a multitude of use cases as our project grows, from
                  raffle entries, exclusive merchandise, alpha access, and of
                  course breeding of Doodle Punks (soon to be announced). But we
                  strongly feel that it is only scratching the surface of what
                  $CRAYONs could do.
                </div>
              </Collapsible>
            </div>
            <div className='questions__item'>
              <Collapsible
                trigger='What are the traits and rarities?'
                className='questions__head'
              >
                <div className='questions__body'>
                  Every Doodle Punk has unique traits and attributes, but some
                  traits are more rare and special than others. These rarities
                  are often used to determine value but we think all of them are
                  amazing.
                </div>
              </Collapsible>
            </div>
            <div className='questions__item'>
              <Collapsible
                trigger='Do I get more benefits if I own more? '
                className='questions__head'
              >
                <div className='questions__body'>
                  Yes. Fractions will be distributed based on how many Doodle
                  Punks you have staked. The more you own, the more $CRAYON
                  utility tokens you receive.
                </div>
              </Collapsible>
            </div>
            <div className='questions__item'>
              <Collapsible
                trigger='What is the Utility Token?'
                className='questions__head'
              >
                <div className='questions__body'>
                  $CRAYON will be an ERC-20 utility token airdropped to staked
                  Doodle Punks NFTs. This token will have various uses within
                  our ecosystem but it is key to understand that 1 $CRAYON = 1
                  $CRAYON. And that it has no promise of value.
                </div>
              </Collapsible>
            </div>
            <div className='questions__item'>
              <Collapsible
                trigger='I have more questions, where can ask?'
                className='questions__head'
              >
                <div className='questions__body'>
                  You can reach out to us in our Discord at any time or by email
                  at info@doodle-punks.com. Thank you, hope to hear from you
                  soon!
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
