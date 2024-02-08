import React from 'react';
import Rating from '@mui/material/Rating';
import './UserFeedbackCard.css';

function UserFeedbackCard() {
  return (
    <div className='user-feedback-main'>
        <div className='user-name-row'>
            <div className='user-details'>
              <div className='user-avatar'></div>
              <div className='user-name'>Saurabh K</div>
            </div>
            <div className='user-rating'>
            <Rating name="read-only" value="3" readOnly size="small"/>
            </div>
        </div>
        <div className='feedbac-details'>

        </div>
    </div>
  );
}

export default UserFeedbackCard