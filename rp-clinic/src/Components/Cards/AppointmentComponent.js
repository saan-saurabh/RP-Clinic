import React from 'react';
import Modal from '../Modal/Modal';
import './AppointmentComponent.css';

function AppointmentComponent({isOpen,onClose,onOpen}) {
  return (
    <div className='appointment-component-main'>
        <div className='appointment-heading'>Make an Online Appointment<br/><span>Book your slot now!</span></div>
        <button className='appointment-button' onClick={onOpen}>
            Make an Appointment
        </button>
        <Modal isOpen={isOpen} onClose={onClose}/>
    </div>
  );
}

export default AppointmentComponent