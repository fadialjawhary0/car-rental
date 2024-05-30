import React from 'react';

import googleImg from '../../../assets/download/googleapp.svg';
import appleImg from '../../../assets/download/appstore.svg';

import './DownloadStyles.scss';

const Download = () => {
  return (
    <div className='download-section'>
      <div className='container'>
        <div className='download-text'>
          <h2>Download our app to get most out of it</h2>
          <p>
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className='download-text_buttons'>
            <img
              className='download-btn'
              src={googleImg}
              alt='google download button'
            />
            <img
              className='download-btn'
              src={appleImg}
              alt='apple download button'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
