import React from 'react';

import HeroPages from '../../components/HeroPages/HeroPages';
import PlanTrip from '../../components/PlanTrip/PlanTrip';

import mainImg from '../../assets/about/about-main.jpg';
import icon1 from '../../assets/about/icon1.png';
import icon2 from '../../assets/about/icon2.png';
import icon3 from '../../assets/about/icon3.png';

import './AboutStyles.scss';
import ContactBanner from '../../components/ContactBanner/ContactBannerStyles';

const About = () => {
  return (
    <div className='about-page'>
      <HeroPages pageName='About' />
      <div className='container'>
        <div className='about-main'>
          <img className='about-main_img' src={mainImg} alt='main' />
          <div className='about-main_text'>
            <h3>About Company</h3>
            <h2>You start the engine and your adventure begins</h2>
            <p className='about-main_text_paragraph'>
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className='about-main_text_icons'>
              <div className='about-main_text_icons_box'>
                <img src={icon1} alt='Car types icon' />
                <span>
                  <h4>20</h4>
                  <p>Car Types</p>
                </span>
              </div>
              <div className='about-main_text_icons_box'>
                <img src={icon2} alt='Rental outlets icon' />
                <span>
                  <h4>85</h4>
                  <p>Rental Outlets</p>
                </span>
              </div>
              <div className='about-main_text_icons_box'>
                <img src={icon3} alt='Repair shop icon' className='last-icon' />
                <span>
                  <h4>75</h4>
                  <p>Repair Shop</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <PlanTrip />
      </div>
      <ContactBanner />
    </div>
  );
};

export default About;
