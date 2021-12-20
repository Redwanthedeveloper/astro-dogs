import React from 'react';
import logo from '../assets/images/logo.webp';
const Header = () => {
  return (
    <>
      <div
        className='header py-8 px-4 lg:px-12 absolute top-0 w-full z-10'
        id='header'
      >
        <div className='header__wrapper grid gap-6 sm:gap-0 sm:grid-cols-2 justify-center items-center rounded-full '>
          <div className='logo w-36 lg:w-32 justify-self-center'>
            <img src={logo} alt='' className='max-w-full' />
          </div>
          <div className=' main__nav '>
            <ul className='flex gap-8 sm:gap-8 lg:gap-16 uppercase font-bold text-white lg:justify-start lg:py-6 lg:px-20 sm:py-6 px-8 '>
              <li>
                <a href='#about' className='hover:text-[#b2b0f2]'>
                  about
                </a>
              </li>

              <li>
                <a href='#roadmap' className='hover:text-[#b2b0f2]'>
                  roadmap
                </a>
              </li>
              <li>
                <a href='#team' className='hover:text-[#b2b0f2]'>
                  team
                </a>
              </li>
              <li>
                <a href='#faq' className='hover:text-[#b2b0f2]'>
                  faq
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
