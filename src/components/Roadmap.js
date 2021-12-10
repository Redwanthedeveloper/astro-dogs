import React from 'react';
const Roadmap = () => {
  return (
    <>
      <section className='roadmap center' id='roadmap'>
        <div className='roadmap__wrapper'>
          <div className='roadmap__top'>
            <h1 className='roadmap__title d1 features__title'>
              Doodle Punks Roadmap
            </h1>
            <p className='roadmap__desc features__info'>
              We are committed to progressively building, expanding and evolving
              Doodle Punks through innovation, creativity and community
              solidarity.
            </p>
          </div>
          <div className='roadmap__bottom'>
            <div className='roadmap__item'>
              <div className='roadmap__item__left'></div>
              <div className='roadmap__item__right'>
                <h4 className='item__title'>Artwork & Community</h4>
                <p className='item__description'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Optio, impedit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
