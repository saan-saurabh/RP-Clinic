import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import EmergencyContactCard from '../Components/Cards/EmergencyContactCard';
import AppointmentComponent from '../Components/Cards/AppointmentComponent';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TourIcon from '@mui/icons-material/Tour';
import './Contact.css';
import { Button } from '@mui/material';
import Footer from '../Components/Footer/Footer';

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  }
  const handleOpen = () => {
    setIsOpen(true);
  }
  return (
    <div className='contact-main-div'>
      <div className='messeage-form-time-table-main-div'>
        <div className='contact-message-details'>
          <div className='details-wrapper-card'>
          <table>
              <thead><LocationOnIcon /> Location</thead>
              <tbody>
                <tr>
                  <td>Mahila Hospital Road</td>
                </tr>
                <tr>
                  <td>
                    Near Cholera Ward, Jagdishpur
                 </td>
                </tr>
                <tr>
                  <td>
                    Ballia, Uttar Pradesh - 277001
                    </td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead><VisibilityIcon /> Visiting Hours</thead>
              <tbody>
                <tr>
                  <td>Mon,Tue,Thur,Sat</td>
                  <td><td>8.30 AM</td><td>- 6.30 PM</td></td>
                </tr>
                <tr>
                  <td>Wed,Fri</td>
                  <td><td>3.30 PM</td><td>- 6.30 PM</td></td>
                </tr>
                <tr>
                  <td>Sun</td>
                  <td><td>10.00 AM</td><td>- 2.00 PM</td></td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead><ContactMailIcon /> Contact Details</thead>
              <tbody>
                <tr>
                  <td><RingVolumeIcon fontSize='small'/> Mobile</td>
                  <td>+91-9205570105</td>
                </tr>
                <tr>
                  <td><RingVolumeIcon fontSize='small'/> Mobile</td>
                  <td>+91-7007570680</td>
                </tr>
                <tr>
                  <td><MailOutlineIcon fontSize='small'/> Email</td>
                  <td>rpclinic@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
        <div className='message-form-div'>
          <div className='form-card'>
            <div className='leave-msg-heading'>
              Leave Message..
            </div>
            <div className='leave-msg-form'>
              <form>
              <TextField fullWidth id="filled-basic" label="Name" variant="filled" size='small'/>
              <br/>
              <br/>
              <TextField fullWidth id="filled-basic" label="Email" variant="filled" size='small'/>
              <br/>
              <br/>
              <TextField fullWidth
          id="filled-multiline-static"
          label="Message"
          multiline
          rows={4}
          placeholder='Type your message'
          variant="filled"
        />
        <br/>
        <br/>
        <Button fullWidth variant='contained' size='large'>Send</Button>

              </form>
              </div>
          </div>
        </div>
      </div>
      <div className='energency-appointment-panel'>
        <EmergencyContactCard />
        <AppointmentComponent isOpen={isOpen} onClose={handleClose} onOpen={handleOpen} />
      </div>
      <Footer/>
    </div>
  )
}

export default Contact