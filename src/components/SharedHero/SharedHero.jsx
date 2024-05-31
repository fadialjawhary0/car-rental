import React from 'react';

import './SharedHeroStyles.scss';

const SharedHero = ({ pageName }) => {
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

export default SharedHero;
