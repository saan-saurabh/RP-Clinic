import React from 'react';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import './UserFeedbackCard.css';

function UserFeedbackCard({username,feedbackDate,ratingValue,feedback}) {
  return (
    <div className='user-feedback-main'>
        <div className='user-name-row'>
            <div className='user-details'>
              <div className='user-avatar'><Avatar src="/broken-image.jpg" /></div>
              <div className='user-name'>{" "}{username} </div>
            </div>
            <div className='user-rating'>
            <Rating name="read-only" value={ratingValue} readOnly size="small"/>
            </div>
        </div>
        <div className='feedbac-details'>
          {feedback}
        </div>
        <div className='feedbac-footer'>
          {feedbackDate}
        </div>
    </div>
  );
}

export default UserFeedbackCard