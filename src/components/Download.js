import React from 'react';
import incubator from '../images/incubator.png';
import egg2 from '../images/egg2.png';
const Download = () => {
  return (
    <>
      <div className='download'>
        <div className='features__center center'>
          <h2
            className='features__title h2'
            data-aos='animation-scale-top'
            data-aos-duration={600}
          >
            Tweeps incubator is warming&nbsp;up!
          </h2>
          <div className='download__info'>
            Be on the lookout for the official drop date announcement
            and&nbsp;countdown. Stay&nbsp;tuned&nbsp;by&nbsp;following our{' '}
            <a href='#.' target='_blank'>
              Twitter
            </a>{' '}
            and{' '}
            <a href='#.' target='_blank'>
              Discord
            </a>{' '}
            channels.
          </div>
          <button
            className='features__btn btn btn_orange not-allowed'
            disabled
            style={{ fontFamily: 'Inter, Bangla980, sans-serif' }}
          >
            Mint a Bitty Tweep: ◎1
          </button>
          <div className='features__bg'>
            <div className='features2__preview'>
              <img src={incubator} style={{ maxWidth: '700px' }} alt='' />
            </div>
            <div className='features2__preview'>
              <img src={egg2} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
