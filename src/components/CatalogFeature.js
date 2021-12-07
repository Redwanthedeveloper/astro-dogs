import React from 'react';
import catalogTeasure from '../images/catalog-teaser.svg';
const CatalogFeature = () => {
  return (
    <>
      <div className='features'>
        <div className='features__center center'>
          <h2
            className='features__title h2'
            data-aos='animation-scale-top'
            data-aos-duration={600}
          >
            Coming Soon: Interactive Traits Explorer
          </h2>
          <div className='download__info'>
            Every bitty tweep has a unique combination of features that creates
            fun and interesting personalities. Post-drop, users can explore
            their bitty tweep features and view rarity&nbsp;statistics using the
            interactive traits explorer.
          </div>
          <div className='about__preview'>
            <object
              type='image/svg+xml'
              style={{ maxWidth: '400px', display: 'block', margin: 'auto' }}
              data={catalogTeasure}
            >
              <img src={catalogTeasure} style={{ maxWidth: '400px' }} alt='' />
            </object>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogFeature;
