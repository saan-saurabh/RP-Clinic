import React from 'react'
import Logo from './Logo'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-main-div'>
        <div>
            <Logo/>
        </div>
        <div>
            Other stuff
        </div>
    </div>
  );
}

export default Navbar