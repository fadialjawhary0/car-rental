import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Fallback from './components/Fallback/Fallback';

const Home = lazy(() => import('./views/HomePage/Home'));
const About = lazy(() => import('./views/AboutPage/About'));
const Models = lazy(() => import('./views/ModelsPage/Models'));
const Testimonials = lazy(() =>
  import('./views/TestimonialsPage/Testimonials'),
);
const Team = lazy(() => import('./views/TeamPage/Team'));
const Contact = lazy(() => import('./views/ContactPage/Contact'));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Models' element={<Models />} />
          <Route path='Testimonials' element={<Testimonials />} />
          <Route path='Team' element={<Team />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
