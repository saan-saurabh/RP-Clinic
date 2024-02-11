import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AppointmentForm from '../Forms/AppointmentForm';
import './Modal.css';

function Modal({isOpen,onClose}) {
    if(!isOpen) return null;
  return (
    <div className='modal-main-div'>
        <div className='modal-inside-div'>
            <div className='modal-close-button-container'>
                <button className='close-button' onClick={onClose}>{'< '}Back</button>
            </div>
            <div className='form-content'>
            <AppointmentForm/>
            </div>
        </div>
    </div>
  );
}

export default Modal