import React from 'react';
import UserFeedbackCard from './UserFeedbackCard';
import './TestimonialPanel.css';

function TestimonialPanel() {
  return (
    <div className='testimonial-panel-main-div'>
        <div className='testimonial-heading'>
            <span className='small-heading'>What Our </span><span className='bold-heading'>Patients Say</span>
        </div>
        <UserFeedbackCard/>
    </div>
  );
}

export default TestimonialPanel