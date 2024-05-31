import React from 'react';

import './HeroPagesStyles.scss';

const HeroPages = ({ pageName }) => {
  return (
    <section className='hero-pages'>
      <div className='hero-pages_overlay'></div>
      <div className='container'>
        <div className='hero-pages_text'>
          <h3>{pageName}</h3>
          <p>
            <a href='/'>Home</a> / {pageName}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroPages;
