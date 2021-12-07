import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import Popup from './Popup';
import closeImage from '../images/close.svg';
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

  return (
    <>
      <header className='header'>
        <div className='header__center center'>
          <NavLink className='header__logo' to='/'>
            <img className='header__pic header__pic_light' src={logo} alt='' />
          </NavLink>
          <div className='header__wrapper'>
            <nav className='header__nav'>
              <NavLink className='header__link' to='/mint'>
                Mint Incubator
              </NavLink>
              <NavLink className='header__link' to='/catalog'>
                Traits Explorer
              </NavLink>
              <NavLink className='header__link' to='/roadmap'>
                Roadmap
              </NavLink>
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
                <NavLink className='header__link' to='/mint'>
                  Mint Incubator
                </NavLink>
                <NavLink className='header__link' to='/catalog'>
                  Traits Explorer
                </NavLink>
                <NavLink className='header__link' to='/roadmap'>
                  Roadmap
                </NavLink>
              </nav>
              <div className='header__btns'>
                <button
                  className='header__btn btn btn_border'
                  onClick={showModal}
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
      {show && <Popup setShow={setShow} />}
    </>
  );
};

export default Header;
