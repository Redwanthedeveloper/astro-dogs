import React from 'react';
import About from '../components/About';
import Comments from '../components/Comments';
import Features from '../components/Features';
import Quality from '../components/Quality';
import Questions from '../components/Questions';

const HomeScreen = () => {
  return (
    <>
      <Features />
      <Quality />
      <Comments />
      <Questions />
      <About />
    </>
  );
};

export default HomeScreen;
