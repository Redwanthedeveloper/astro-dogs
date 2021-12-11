import React, { useState } from 'react';
import logo from '../images/logo.png';
import closeImage from '../images/close.svg';
import Mint from './Mint';

const Header = () => {
  const [show, setShow] = useState(false);
  const [navShow, setNavShow] = useState(false);

  const openNav = (e) => {
    setNavShow(true);
  };
  const closeNav = (e) => {
    setNavShow(false);
  };
  const showModal = () => {
    setShow(true);
  };

  const mobileNav = () => {
    setNavShow(false);
    showModal();
  };

  return (
    <>
      <header className='header'>
        <div className='header__center center'>
          <a className='header__logo' href='/'>
            <img
              className='header__pic header__pic_light'
              src={logo}
              alt={logo}
            />
          </a>
          <div className='header__wrapper'>
            <nav className='header__nav'>
              <a className='header__link' href='#about'>
                About
              </a>
              <a className='header__link' href='#dao'>
                DAO
              </a>
              <a className='header__link' href='#roadmap'>
                Roadmap
              </a>
              <a className='header__link' href='#team'>
                Team
              </a>
              <a className='header__link' href='#faq'>
                <span>FAQ</span>s
              </a>
            </nav>
            <div className='header__btns'>
              <button
                className='heahrefhrefder__btn btn btn_border'
                onClick={showModal}
              >
                Connect Wallet
              </button>
            </div>
          </div>

          {navShow && (
            <div className='header__wrapper visible'>
              <nav className='header__nav'>
                <a className='header__link' href='#about' onClick={mobileNav}>
                  About
                </a>
                <a className='header__link' href='#dao' onClick={mobileNav}>
                  DAO
                </a>
                <a className='header__link' href='#roadmap' onClick={mobileNav}>
                  Roadmap
                </a>
                <a className='header__link' href='#team' onClick={mobileNav}>
                  Team
                </a>
                <a className='header__link' href='#faq' onClick={mobileNav}>
                  <span>FAQ</span>s
                </a>
              </nav>
              <div className='header__btns'>
                <button
                  className='header__btn btn btn_border'
                  onClick={() => {
                    showModal();
                    mobileNav();
                  }}
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          )}
          <button
            className={`header__burger ${navShow && 'remove__header__burger'}`}
            onClick={(e) => openNav(e)}
          ></button>

          <button
            className={` close__btn__visible ${navShow && 'close__nav'}`}
            onClick={(e) => closeNav(e)}
          >
            <img src={closeImage} alt='' />
          </button>
        </div>
      </header>
      {show && <Mint />}
    </>
  );
};

export default Header;
