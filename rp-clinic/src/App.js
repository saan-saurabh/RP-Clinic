import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import MainCrousel from './Components/CrouselCard/MainCrousel';
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <Navbar/>
      <MainCrousel/>
      <Footer/>
    </div>
    

  );
}

export default App;
