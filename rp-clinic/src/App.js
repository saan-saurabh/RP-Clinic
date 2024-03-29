import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import MainCrousel from './Components/CrouselCard/MainCrousel';
import BodyDescriptionCardFirst from './Components/Cards/BodyDescriptionCardFirst';
import DoctorProfile from './Components/Cards/DoctorProfile';
import ServiceComponent from './Components/Cards/ServiceComponent';
import AppointmentComponent from './Components/Cards/AppointmentComponent';
import EmergencyContactCard from './Components/Cards/EmergencyContactCard';
import DoctorProfileCard from './Components/Cards/DoctorProfileCard';
import Doctor from './Components/Cards/Doctor';
import TestimonialPanel from './Components/Testimonials/TestimonialPanel';
import Button from '@mui/material/Button';
import TopScrollButton from './Components/TopScrollButton/TopScrollButton';


function App() {
  const [isOpen,setIsOpen]=useState(false);
  const handleClose = ()=>{
    setIsOpen(false);
  }
  const handleOpen=()=>{
    setIsOpen(true);
  }
  return (
    <div className='main-body'> 
      <Navbar isOpen={isOpen} onClose={handleClose} onOpen={handleOpen}/>
    </div>
    

  );
}

export default App;
