import React from 'react';
import Countdown from 'react-countdown';

const CountDown = () => {
  const renderer = ({ days, hours, minutes }) => {
    return (
      <div className='CountDown__timer px-4 md:px-0 flex gap-16 items-center justify-center py-12 text-default'>
        <div className='text-center'>
          <p className='CountDown__timer-main text-3xl lg:text-7xl font-medium mb-1'>
            {days}
          </p>
          <p className='uppercase text-xs md:text-base font-light gray-100'>
            Days
          </p>
        </div>
        <div className='text-center'>
          <p className='CountDown__timer-main text-3xl lg:text-7xl font-medium mb-1'>
            {hours}
          </p>
          <p className='uppercase text-xs md:text-base font-light gray-100'>
            hours
          </p>
        </div>

        <div className='text-center'>
          <p className='CountDown__timer-main text-3xl lg:text-7xl font-medium mb-1'>
            {minutes}
          </p>
          <p className='uppercase text-xs md:text-base font-light gray-100'>
            minutes
          </p>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className='CountDown py-12 bg-[#c7ecff]' style={{}}>
        <div className='Main__Margin px-5 lg:px-12 rounded'>
          <div className='CountDown__inner md:px-8 md:pt-16'>
            <p className='text-center  text-3xl lg:text-7xl font-bold tracking-wide uppercase mb-6 text-default'>
              Coming Soon!
            </p>
            <Countdown date={Date.now() + 100} renderer={renderer} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CountDown;
