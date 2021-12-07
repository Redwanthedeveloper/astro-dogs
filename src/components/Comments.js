import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import carouselImage from '../images/bb-carousel2.png';

const Comments = () => {
  return (
    <>
      <div className='comment'>
        <div className='comment__center center'>
          <h2
            className='options__title h2'
            data-aos='animation-scale-top'
            data-aos-duration={600}
          >
            Bitty&nbsp;Tweeps Sneak&nbsp;Peeps
          </h2>
          <div className='comment__container'>
            <div className='comment__slider'>
              <OwlCarousel
                loop={true}
                className='owl-theme'
                margin={10}
                items={3}
                autoplay={true}
                autoplaySpeed={500}
                navSpeed={500}
                dots={false}
                nav={true}
                navText={[
                  `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4965 18.6904L10.5056 19.6843C10.086 20.1052 9.40746 20.1052 8.99233 19.6843L0.314729 10.9848C-0.104867 10.5639 -0.104867 9.88335 0.314729 9.46695L8.99233 0.762921C9.41193 0.342048 10.0904 0.342048 10.5056 0.762921L11.4965 1.7569C11.9206 2.18225 11.9116 2.87625 11.4787 3.29264L6.0998 8.43268L18.9287 8.43268C19.5224 8.43268 20 8.91176 20 9.50725L20 10.94C20 11.5355 19.5224 12.0146 18.9287 12.0146L6.0998 12.0146L11.4787 17.1546C11.9161 17.571 11.925 18.265 11.4965 18.6904Z" fill="#fff"/>
                </svg>`,
                  `<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.80281 1.04771L7.59558 0.252525C7.93126 -0.0841751 8.47405 -0.0841751 8.80616 0.252525L15.7482 7.21219C16.0839 7.54889 16.0839 8.09334 15.7482 8.42646L8.80616 15.3897C8.47048 15.7264 7.92769 15.7264 7.59558 15.3897L6.80281 14.5945C6.46356 14.2542 6.47071 13.699 6.8171 13.3659L11.1202 9.25388H0.857047C0.3821 9.25388 0 8.87062 0 8.39422V7.24801C0 6.77162 0.3821 6.38835 0.857047 6.38835H11.1202L6.8171 2.27631C6.46714 1.94319 6.45999 1.38799 6.80281 1.04771Z" fill="#fff"/>
                </svg>
                `,
                ]}
                responsive={{
                  0: {
                    items: 1,
                  },
                  600: {
                    items: 3,
                  },
                }}
              >
                <div className='item'>
                  <div className='comment__item'>
                    <img src={carouselImage} alt='' />
                  </div>
                </div>
                <div className='item'>
                  <div className='comment__item'>
                    <img src={carouselImage} alt='' />
                  </div>
                </div>
                <div className='item'>
                  <div className='comment__item'>
                    <img src={carouselImage} alt='' />
                  </div>
                </div>
                <div className='item'>
                  <div className='comment__item'>
                    <img src={carouselImage} alt='' />
                  </div>
                </div>
                <div className='item'>
                  <div className='comment__item'>
                    <img src={carouselImage} alt='' />
                  </div>
                </div>
                <div className='item'>
                  <div className='comment__item'>
                    <img src={carouselImage} alt='' />
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
