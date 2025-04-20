import './App.css';
import { useEffect } from 'react';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Project } from './components/Project';
import { Service } from './components/Service';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 130,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <AboutUs />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
