import React from 'react'
import './EmergencyContactCard.css'

function EmergencyContactCard() {
  return (
    <div className='emergency-contact-main'>
        <div className='emergencycontact-heading'>For Any Emergency Contact<br/><span>Call us!</span></div>
        <button className='emergency-call-button'>
            +91-900900900
        </button>
    </div>
  );
}

export default EmergencyContactCard