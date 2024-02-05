import React from 'react';
import './Modal.css';

function Modal({isOpen,onClose}) {
    if(!isOpen) return null;
  return (
    <div className='modal-main-div'>
        <div className='modal-inside-div'>
            <div className='modal-close-button-container'>
                <button className='close-button' onClick={onClose}>X</button>
            </div>
        <div><h1>hi its me</h1></div>
        </div>
    </div>
  );
}

export default Modal