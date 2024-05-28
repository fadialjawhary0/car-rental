import React from 'react';
import { Link } from 'react-router-dom';
import { IconChevronRight } from '@tabler/icons-react';

import mainImg from '../../../assets/chooseUs/main.png';
import icon1 from '../../../assets/chooseUs/icon1.png';
import icon2 from '../../../assets/chooseUs/icon2.png';
import icon3 from '../../../assets/chooseUs/icon3.png';

import './ChooseUsStyles.scss';

const ChooseUs = () => {
  const detailsBtn = () => {
    document
      .querySelector('#hero-section')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='choose-section'>
      <div className='container'>
        <div className='choose-container'>
          <img
            className='choose-container_img'
            src={mainImg}
            alt='Cars Image'
          />
          <div className='text-container'>
            <div className='text-container_left'>
              <h4>Why Choose Us</h4>
              <h2>Best valued deals you will ever find</h2>
              <p>
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
              <Link className='find-details-btn' onClick={detailsBtn}>
                Find Details <IconChevronRight />
              </Link>
            </div>

            <div className='text-container_right'>
              <div className='text-container_right_box'>
                <img src={icon1} alt='cross counter drive icon' />
                <div className='text-container_right_box_text'>
                  <h4>Cross Country Drive</h4>
                  <p>
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>

              <div className='text-container_right_box'>
                <img src={icon2} alt='all inclusive pricing icon' />
                <div className='text-container_right_box_text'>
                  <h4>All Inclusive Pricing</h4>
                  <p>
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>

              <div className='text-container_right_box'>
                <img src={icon3} alt='no hidden charges icon' />
                <div className='text-container_right_box_text'>
                  <h4>No Hidden Charges</h4>
                  <p>
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
