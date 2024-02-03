import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import MainCrousel from './Components/CrouselCard/MainCrousel';
import BodyDescriptionCardFirst from './Components/Cards/BodyDescriptionCardFirst';
import DoctorProfile from './Components/Cards/DoctorProfile';
import ServiceComponent from './Components/Cards/ServiceComponent';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className='main-body'> 
      <Navbar/>
      <MainCrousel/>
      <BodyDescriptionCardFirst/>
      <ServiceComponent/>
      <DoctorProfile/>
      <Footer/>
    </div>
    

  );
}

export default App;
