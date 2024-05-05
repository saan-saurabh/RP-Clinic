import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import Modal from '../Modal/Modal';
import Home from '../../Routes/Home';
import Services from '../../Routes/Services';
import Contact from '../../Routes/Contact';
import About from '../../Routes/About';
import Logo from './Logo';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar({ isOpen, onClose, onOpen }) {
  const [sideBarMenuListState, setSideBarMenuListState] = useState(false);
  const openSideBarMenuList = () => {
    setSideBarMenuListState(!sideBarMenuListState);
  }
  return (
    <Router>
      <div className='navbar-main-div'>
        <div>
          <Logo />
        </div>
        {((window.screen.width) > 992) ?
          <div className='navbar-make-appointment-button'>
            <div className='navbar-right-pane'>
              <Link to="/"></Link>
              <Link to="/home" className='link-menu'><button className='list-menu'>HOME</button></Link>
              <Link to="/services" className='link-menu'><button className='list-menu'>SERVICES</button></Link>
              <Link to="/contact" className='link-menu'><button className='list-menu'>CONTACT</button></Link>
              <Link to="/about" className='link-menu'><button className='list-menu'>ABOUT</button></Link>
              <button className='list-button' onClick={onOpen}>APPOINTMENT</button>
              <Modal isOpen={isOpen} onClose={onClose} />
            </div>
          </div> : <MenuIcon fontSize='large' className='navbar-hamburger-icon' onClick={openSideBarMenuList} />}
      </div>
      {sideBarMenuListState ?
        <div className='sidebar-main-div'>
          <div className='sidebar-right-pane'>
            <Link to="/"></Link>
            <Link to="/home" className='link-menu'><button className='list-menu' onClick={openSideBarMenuList}>HOME </button></Link>
            <Link to="/services" className='link-menu'><button className='list-menu' onClick={openSideBarMenuList}>SERVICES</button></Link>
            <Link to="/contact" className='link-menu'><button className='list-menu' onClick={openSideBarMenuList}>CONTACT</button></Link>
            <Link to="/about" className='link-menu'><button className='list-menu' onClick={openSideBarMenuList}>ABOUT</button></Link>
            <button className='list-menu' onClick={onOpen}>APPOINTMENT</button>
            <Modal isOpen={isOpen} onClose={onClose} />
          </div></div> : null}
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        ></Route>
        <Route
          exact
          path="/home"
          element={<Home />}
        ></Route>
        <Route
          exact
          path="/services"
          element={<Services />}
        ></Route>
        <Route
          exact
          path="/contact"
          element={<Contact />}
        ></Route>
        <Route
          exact
          path="/about"
          element={<About />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default Navbar