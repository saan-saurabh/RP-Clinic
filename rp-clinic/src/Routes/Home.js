import React,{useState} from 'react'
import Footer from '../Components/Footer/Footer'
import MainCrousel from '../Components/CrouselCard/MainCrousel'
import BodyDescriptionCardFirst from '../Components/Cards/BodyDescriptionCardFirst'
import ServiceComponent from '../Components/Cards/ServiceComponent'
import AppointmentComponent from '../Components/Cards/AppointmentComponent'
import EmergencyContactCard from '../Components/Cards/EmergencyContactCard'
import Doctor from '../Components/Cards/Doctor'
import TestimonialPanel from '../Components/Testimonials/TestimonialPanel'
import TopScrollButton from '../Components/TopScrollButton/TopScrollButton'


function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
    }
    const handleOpen = () => {
        setIsOpen(true);
    }
    return (
        <div className='main-body'>
            <TopScrollButton />
            <MainCrousel />
            <BodyDescriptionCardFirst />
            <ServiceComponent />
            <Doctor />
            <div className='energency-appointment-panel'>
                <EmergencyContactCard />
                <AppointmentComponent isOpen={isOpen} onClose={handleClose} onOpen={handleOpen} />
            </div>
            <TestimonialPanel />
            <Footer />
        </div>
    );
}

export default Home