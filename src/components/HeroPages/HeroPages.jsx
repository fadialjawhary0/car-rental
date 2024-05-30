import React from 'react';

import './HeroPagesStyles.scss';

const HeroPages = ({ pageName }) => {
  return (
    <section className='hero-pages'>
      <div className='hero-pages_overlay'>
        <h3>{pageName}</h3>
        <p>
          <a href='/'>Home</a> / {pageName}
        </p>
      </div>
    </section>
  );
};

export default HeroPages;
