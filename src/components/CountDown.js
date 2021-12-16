import React from 'react';
import Countdown from 'react-countdown';

const CountDown = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className='countdown__wrapper flex gap-8 text-xl lg:text-4xl font-bold justify-center items-center font-heading'>
        <div className='days flex items-center flex-col uppercase'>
          {days} <span>days</span>
        </div>
        <div className='hours flex items-center flex-col uppercase'>
          {hours} <span>Hours</span>
        </div>
        <div className='minutes flex items-center flex-col uppercase'>
          {minutes} <span>Minutes</span>
        </div>
        <div className='seconds flex items-center flex-col uppercase'>
          {seconds} <span>seconds</span>
        </div>
      </div>
    );
  };
  return (
    <div className='countdown__main'>
      <h1 className='text-center text-3xl lg:text-5xl font-bold py-12 uppercase font-heading'>
        Coming Soon..!
      </h1>
      <Countdown date={Date.now() + 500000000} renderer={renderer} />
    </div>
  );
};

export default CountDown;
