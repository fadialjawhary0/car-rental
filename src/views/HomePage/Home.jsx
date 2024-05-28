import React from 'react';

import HeroSection from './HeroSection/HeroSection';
import BookCar from './BookCar/BookCar';
import PlanTrip from './PlanTrip/PlanTrip';
import PickCar from './PickCar/PickCar';
import Banner from './Banner/Banner';
import ChooseUs from './ChooseUs/ChooseUs';

const Home = () => {
  return (
    <div style={{ paddingBottom: '50rem' }}>
      <HeroSection />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
    </div>
  );
};

export default Home;
