import React from 'react';
import twitter from '../images/twitter.svg';
import discord from '../images/discord.svg';

const History = () => {
  return (
    <>
      <div className='history'>
        <div className='offer__center center'>
          <div className='offer__container'>
            <h2
              className='offer__title h2'
              data-aos='animation-scale-top'
              data-aos-duration='600'
            >
              follow the beats of the bitty&nbsp;tweeps
            </h2>
            <button className='features__btn btn btn_orange'>
              <a href='#.' target='_blank' style={{ color: '#ffffff' }}>
                <img className='icon icon-twitter' src={twitter} alt='' />
                <span>Twitter</span>
              </a>
            </button>{' '}
            &nbsp;{' '}
            <a href='#.' target='_blank' style={{ color: '#ffffff' }}>
              <button className='features__btn btn btn btn_orange'>
                <img className='icon icon-twitter' src={discord} alt='' />
                <span>Discord</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
