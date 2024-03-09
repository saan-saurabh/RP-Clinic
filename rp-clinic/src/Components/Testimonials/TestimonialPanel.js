import React from 'react';
import UserFeedbackCard from './UserFeedbackCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import testimonialImg from './testimonialImg.png';
import './TestimonialPanel.css';

function TestimonialPanel() {
  const userFeedbacks = [
    {username: "Saurabh K", feedbackDate:"12/12/2023", ratingValue:"5", feedback:'Dr. Sanjay is a well experienced doctor'},
    {username: "Abhi", feedbackDate:"01/01/2024", ratingValue:"4", feedback:'Very good service'},
    {username: "Suresh", feedbackDate:"10/01/2024", ratingValue:"4", feedback:'Service is good and Doctor is very cooperative'},
    {username: "AK", feedbackDate:"28/12/2023", ratingValue:"3", feedback:'Please visit this clinic if you have any orthopedic problem'}
    ]

    const myStyle = {
      width:"100%",
      backgroundImage: `url(${testimonialImg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
  };

  return (
    <div className='testimonial-panel-main-div' style={myStyle}>
        <div className='testimonial-heading'>
            <span className='small-heading'>What Our </span><span className='bold-heading'>Patients Say</span>
        </div>
        <div className='testimonial-wrapper'>
        <div className="testimonil-crousel" style={{width:'50%',marginLeft:'5%'}}>
        <Carousel showThumbs={false}  showStatus={false} showIndicators={false} autoPlay infiniteLoop transitiontime="5000">
        {userFeedbacks.map((userfeedback)=>
        <UserFeedbackCard username={userfeedback.username} feedbackDate={userfeedback.feedbackDate} ratingValue={userfeedback.ratingValue} feedback={userfeedback.feedback}/>
        )}
        </Carousel>
        </div>
        </div>
    </div>
  );
}

export default TestimonialPanel