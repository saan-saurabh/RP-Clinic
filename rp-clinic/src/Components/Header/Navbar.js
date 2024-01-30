import React from 'react'
import Logo from './Logo'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-main-div'>
      <div>
        <Logo />
      </div>
      <div className='navbar-make-appointment-button'>
        <div className='navbar-right-pane'>
          <button className='list-menu'>HOME</button>
          <button className='list-menu'>SERVICES</button>
          <button className='list-menu'>CONTACT</button>
          <button className='list-menu'>ABOUT</button>
          <button className='list-button'>MAKE APPOINTMENT</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar