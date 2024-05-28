import React from 'react';

import selectCarIcon from '../../../assets/plan/icon1.png';
import operatorIcon from '../../../assets/plan/icon2.png';
import driveIcon from '../../../assets/plan/icon3.png';

import './PlanTripStyles.scss';

const PlanTrip = () => {
  return (
    <section className='plan-section'>
      <div className='container'>
        <div className='plan-container'>
          <div className='plan-container_title'>
            <h3>Plan your trip now</h3>
            <h2>Quick & easy car rental</h2>
          </div>
          <div className='plan-container_boxes'>
            <div className='plan-container_boxes_box'>
              <img src={selectCarIcon} alt='select car icon' />
              <h3>Select Car</h3>
              <p>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>

            <div className='plan-container_boxes_box'>
              <img src={operatorIcon} alt='operator icon' />

              <h3>Contact Operator</h3>
              <p>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>

            <div className='plan-container_boxes_box'>
              <img src={driveIcon} alt='drive icon' />

              <h3>Let's Drive</h3>
              <p>
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTrip;
