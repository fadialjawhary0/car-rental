import React from 'react';

import Hero from './Hero/Hero';
import BookCar from './BookCar/BookCar';
import PlanTrip from './PlanTrip/PlanTrip';
import PickCar from './PickCar/PickCar';
import Banner from './Banner/Banner';
import ChooseUs from './ChooseUs/ChooseUs';
import Testimonials from './Testimonials/Testimonials';
import Faq from './Faq/Faq';
import Download from './Download/Download';

const Home = () => {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
    </>
  );
};

export default Home;
