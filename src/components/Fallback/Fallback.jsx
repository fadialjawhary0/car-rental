import React from 'react';
import { ClipLoader } from 'react-spinners';

import './FallbackStyles.scss';

const Fallback = () => {
  return (
    <div className='spinner-container'>
      <ClipLoader color='#ff4c1c' />
    </div>
  );
};

export default Fallback;
