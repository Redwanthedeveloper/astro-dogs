import React from 'react';
import closeImage from '../images/close.svg';
import phantom from '../images/wallet/phantom-logo.svg';
import slope from '../images/wallet/slope.svg';
import solflare from '../images/wallet/solflare.svg';
import sollet from '../images/wallet/sollet.svg';
import solletext from '../images/wallet/solletext.png';

const Popup = ({ setShow }) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className='popup mfp-hide'>
        <div className='popup__title h2'>Connect Wallet</div>
        <div className='popup__variants'>
          <a className='popup__variant not-allowed' href='#.'>
            <img src={phantom} alt='' />
            Phantom Wallet
          </a>
          <a className='popup__variant not-allowed' href='#.'>
            <img src={solflare} alt='' />
            Solflare Wallet
          </a>
        </div>
        <div className='popup__variants'>
          <a className='popup__variant not-allowed' href='#.'>
            <img src={slope} alt='' />
            Slope Wallet
          </a>
          <a className='popup__variant not-allowed' href='#.'>
            <img src={sollet} alt='' />
            Sollet Wallet
          </a>
        </div>
        <div className='popup__variants'>
          <a className='popup__variant not-allowed' href='#.'>
            <img src={solletext} alt='' />
            Sollet (Extension)
          </a>
        </div>
        <div className='popup__details'>
          <br />
          Web3 Wallet connectivity will be activated in coordination with the
          Bitty Tweeps Minting Event (TBA). Stay tuned!
        </div>
        <button className='close__btn' onClick={handleClose}>
          <img src={closeImage} alt='' />
        </button>
      </div>
    </>
  );
};

export default Popup;
