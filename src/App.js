import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MintScreen from './screens/MintScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import History from './components/History';
import CatalogScreen from './screens/CatalogScreen';
import RoadmapScreen from './screens/RoadmapScreen';
import { useEffect } from 'react';
import Aos from 'aos';

function App() {
  useEffect(() => {
    Aos.init({
      useClassNames: false,
    });
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/mint' element={<MintScreen />} />
          <Route path='/catalog' element={<CatalogScreen />} />
          <Route path='/roadmap' element={<RoadmapScreen />} />
        </Routes>
        <History />
        <Footer />
      </Router>
    </>
  );
}

export default App;
