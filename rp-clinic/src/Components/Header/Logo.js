import React from 'react'
import RPClinicLogo from './RPClinicLogo.png'
import './Logo.css'

function Logo() {
  return (
    <div className='logo-main-div'>
      <img className= "logo-img" src={RPClinicLogo} alt="logo"></img>
    </div>
  );
}

export default Logo