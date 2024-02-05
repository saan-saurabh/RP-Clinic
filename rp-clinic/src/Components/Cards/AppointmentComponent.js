import React from 'react';
import './AppointmentComponent.css';

function AppointmentComponent() {
  return (
    <div className='appointment-component-main'>
        <div className='appointment-heading'>Make an Online Appointment<br/><span>Book your slot now!</span></div>
        <button className='appointment-button'>
            Make an Appointment
        </button>
    </div>
  );
}

export default AppointmentComponent