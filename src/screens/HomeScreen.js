import React from 'react';
import About from '../components/About';
import Dao from '../components/Dao';
import Features from '../components/Features';
import Header from '../components/Header';
import Quality from '../components/Quality';
import Questions from '../components/Questions';
import RoadmapScreen from './RoadmapScreen';

const HomeScreen = () => {
  return (
    <>
      <div className='top__wrapper'>
        <Header />
        <Features />
      </div>
      <Quality />
      <Dao />
      <RoadmapScreen />
      <About />
      <Questions />
    </>
  );
};

export default HomeScreen;
