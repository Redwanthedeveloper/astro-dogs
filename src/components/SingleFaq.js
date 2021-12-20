import React, { useState } from 'react';
import arrow from '../assets/images/icons/arrow-down.svg';
import arrowUp from '../assets/images/icons/arrow-up.svg';

const SingleFaq = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className='FrequentlyAsked__questions mb-4'>
        <div
          className='FrequentlyAsked__question header-bg rounded flex justify-between cursor-pointer'
          onClick={() => setIsActive(!isActive)}
        >
          <p className='text-base md:text-xl font-bold text-white '>{title}</p>
          <span>
            <img src={isActive ? arrowUp : arrow} alt='' />
          </span>
        </div>
        {isActive && (
          <p class='py-4 text-base font-light md:text-lg text-white'>
            {content}
          </p>
        )}
      </div>
    </>
  );
};

export default SingleFaq;
