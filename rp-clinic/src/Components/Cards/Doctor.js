import React from 'react';
import DrSanjayProfileImg from './DrSanjayProfileImg.jpg';
import doctorpatientimg from './doctorpatientimg.png'
import './Doctor.css';

function Doctor() {
  const myStyle = {
    width:"100%",
    backgroundImage: `url(${doctorpatientimg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
  return (
    <div className='main' style={myStyle}>
        <span className='name-heading'>Know Your <span className='customized-doctor-heading'>Doctor!</span></span>
        <div className='wrapper'>
        <div className='inside'>
            <div className='img'>
            <img src={DrSanjayProfileImg} alt='Dr Sanjay'/><br/>
                <span className='doctor-name'>DR. SANJAY KUMAR</span>
                <br/>
                <span className='doctor-qualification'>MBBS,D-ORTHO,DNB-ORTHO</span>   
            </div>
            <div className='description'>
            <span className='profile-details'>
            Dr. Sanjay Kumar is a highly skilled orthopedic surgeon with 8+ years of experience,
            specializing in orthopedic care. He served as a residential doctor at two leading 
            healthcare institutions, Medanta - The Medicity in Gurugram and Apollo Hospitals in New Delhi.
                </span>
            </div>
            <div className='doctor-details-read-more'>
              <button className='read-more-button'>Read more</button>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Doctor