import './App.css';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import History from './components/History';
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
      <HomeScreen />
      <History />
      <Footer />
    </>
  );
}

export default App;
