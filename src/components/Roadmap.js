import React from 'react';

const Roadmap = () => {
  return (
    <>
      <section
        className='mt-8 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-24 lg:mb-24 text-center  break-words '
        id='roadmap'
      >
        <h2 className='text-primary sm:text-center text-2xl sm:text-4xl tracking-wide leading-normal font-bold mb-6 sm:mb-10 uppercase text-white py-8'>
          Roadmap
        </h2>
        <div className='relative roadmap__content '>
          <div
            className='roadmap__wrapper grid w-full grid-cols-1 lg:grid-cols-2 gap-8 items-center'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='lg:w-80 w-full justify-self-end'>
              <h1 className='font-bold text-white lg:text-2xl items-center flex justify-center border-2 border-[#022350] lg:rounded-l-full py-8 uppercase'>
                Phase 1
              </h1>
            </div>
            <div className=' text-left text-white ml-4 text-sm lg:text-base lg:ml-12 '>
              <ul className='list-disc'>
                <li>35000 Discord Members</li>
                <li>Youtubers, Tik Tok, NFT influencer promotion</li>
                <li>
                  Heavy advertisements billboards in LA and Promotion at all the
                  major
                </li>
                <li>SoCal Universities/Parties</li>
                <li>NFT DROP/NFT SELL OUT</li>
                <li>Malibu Meetup for Holders </li>
              </ul>
            </div>
          </div>
          <div
            className='roadmap__wrapper grid w-full grid-cols-1 lg:grid-cols-2 gap-8 items-center my-12 '
            data-aos='fade-up'
            data-aos-duration='1200'
          >
            <div className='lg:hidden lg:w-80 w-full justify-self-start'>
              <h1 className='font-bold text-white lg:text-2xl items-center flex justify-center border-2 border-[#022350]  py-8 uppercase'>
                Phase 2
              </h1>
            </div>
            <div className='text-left text-white px-6'>
              <ul className='list-disc'>
                <li>Exclusive Beverly Hills Mansion Party for ALL Holders</li>
                <li>60000 Discord Members</li>
                <li>Applications for all major NFT exchanges</li>
                <li>Game Development Begins</li>
                <li>Staking DAO Development Begins</li>
              </ul>
            </div>
            <div className='lg:w-80 hidden lg:block  justify-self-start'>
              <h1 className='font-bold text-white lg:text-2xl items-center flex justify-center border-2 border-[#022350] rounded-r-full py-8 uppercase'>
                Phase 2
              </h1>
            </div>
          </div>
          <div
            className='roadmap__wrapper grid w-full grid-cols-1 lg:grid-cols-2 gap-8 items-center'
            data-aos='fade-up'
            data-aos-duration='1400'
          >
            <div className=' lg:w-80 w-full   justify-self-end'>
              <h1 className='font-bold text-white lg:text-2xl items-center flex justify-center border-2 border-[#022350] lg:rounded-l-full   py-8 uppercase'>
                Phase 3
              </h1>
            </div>
            <div className=' text-left text-white ml-4 text-sm lg:text-base lg:ml-12 '>
              <ul className='list-disc'>
                <li>100000 Discord Members</li>
                <li>Astro Dogs Game Beta Launch</li>
                <li>Staking Launch</li>
              </ul>
            </div>
          </div>
          <div
            className='roadmap__wrapper grid w-full grid-cols-1 lg:grid-cols-2 gap-8 items-center my-12'
            data-aos='fade-up'
            data-aos-duration='1600'
          >
            <div className='lg:hidden lg:w-80 w-full justify-self-start'>
              <h1 className='font-bold text-white lg:text-2xl items-center flex justify-center border-2 border-[#022350]  py-8 uppercase'>
                Phase 4
              </h1>
            </div>
            <div className='text-left text-white px-6'>
              <ul className='list-disc'>
                <li>125000 Discord Members</li>
                <li>Astro Dogs Cryptocurrency Developments Begins</li>
                <li>More to Come…</li>
              </ul>
            </div>
            <div className='lg:w-80 w-40 hidden lg:block justify-self-start'>
              <h1 className='font-bold text-white lg:text-2xl items-center flex justify-center border-2 border-[#022350] rounded-r-full py-8 uppercase'>
                Phase 4
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
