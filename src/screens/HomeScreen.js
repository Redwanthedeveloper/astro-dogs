import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import CountDown from '../components/CountDown';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
const HomeScreen = () => {
  return (
    <>
      <Header />
      <Banner />
      <CountDown />
      <About />
      <ImageSlider />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </>
  );
};

export default HomeScreen;
