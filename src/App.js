import { Route, Routes } from 'react-router-dom';

import Home from './views/HomePage/Home';
import About from './views/AboutPage/About';
import Models from './views/ModelsPage/Models';
import Testimonials from './views/TestimonialsPage/Testimonials';
import Team from './views/TeamPage/Team';
import Contact from './views/ContactPage/Contact';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Models" element={<Models />} />
        <Route path="Testimonials" element={<Testimonials />} />
        <Route path="Team" element={<Team />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
