import React from 'react';
import SingleFaq from './SingleFaq';

const Faq = () => {
  return (
    <>
      <div
        className='mt-8 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-24 lg:mb-24 text-center  break-words'
        id='faq'
      >
        <h2 className='text-primary sm:text-center text-2xl sm:text-4xl tracking-wide leading-normal font-bold mb-6 sm:mb-10 uppercase text-white py-8'>
          Faq
        </h2>
        <div className='px-4 pt-4 sm:pt-8'>
          <div
            className='text-left border-b-2 border-[#c7ecff] border-opacity-30'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <SingleFaq
                title='What is the total supply of Astro Dogs?'
                content='The total supply of Astro Dogs is 5,555.'
              />
            </div>
          </div>

          <div
            className='text-left border-b-2 border-[#c7ecff] border-opacity-30'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <SingleFaq
                title='When is the release date of Astro Dogs?'
                content='The release date is still TBA, but we are looking to drop this project to the public on January 30, 2022. The presale for whitelisted members will be a day before public drop.'
              />
            </div>
          </div>

          <div
            className='text-left border-b-2 border-[#c7ecff] border-opacity-30'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <SingleFaq
                title='Why should I get whitelisted?'
                content='Being one of the many whitelsist members will give you an advantage to make sure that you secure yourself an Astro Dog before the public sale and will give you guarantee of one as the public sale will sell out quickly.'
              />
            </div>
          </div>

          <div
            className='text-left border-b-2 border-[#c7ecff] border-opacity-30'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <SingleFaq
                title='How many can I purchase?'
                content='The maximum mint limit per person will be 10 Astro Dogs. Just acquiring one will ensure that you are a part of the Astro Dogs community. During presale if you are whitelisted you  will be allowed to mint 3 Astro Dogs only.
                '
              />
            </div>
          </div>

          <div
            className='text-left border-b-2 border-[#c7ecff] border-opacity-30'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <SingleFaq
                title='Are there different types of rarity? '
                content='The class system is one that has been embedded into the Astro Dog universe. Rarity is one of the most important features in this universe. The collection will range from common to super rare.'
              />
            </div>
          </div>

          <div
            className='text-left border-b-2 border-[#c7ecff] border-opacity-30'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <SingleFaq
                title='What is the mint price?'
                content='The mint price to secure you an Astro Dog is 1 SOL.'
              />
            </div>
          </div>

          <div
            className='text-left border-b-2 border-[#c7ecff] border-opacity-30'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <SingleFaq
                title='If I have more questions, where can I ask?'
                content='You can reach out to us in our Discord at any time or by email at astrodogcommunity@gmail.com. Thank you, hope to hear from you soon!'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
