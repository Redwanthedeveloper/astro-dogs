import React from 'react';
import About from '../components/About';
import Comments from '../components/Comments';
import Features from '../components/Features';
import Options from '../components/Options';
import Quality from '../components/Quality';
import Questions from '../components/Questions';
import RoadmapScreen from './RoadmapScreen';

const HomeScreen = () => {
  return (
    <>
      <Features />
      <Quality />
      <Comments />
      <Questions />
      <RoadmapScreen />
      <About />
    </>
  );
};

export default HomeScreen;
