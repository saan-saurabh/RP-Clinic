import React from 'react'
import SocialMediaHandles from './SocialMediaHandles'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-main-div'>
        <div className='footer-inside-block'> 
        <div>
        <div className='footer-column-headings'>VISITING HOURS</div><hr/>
        <table>
        <tbody>
        <tr><td>Mon,Tue,Thur,Sat: 8.30 AM - 6.30 PM</td></tr>
        <tr><td>Wed,Fri: 3.30 PM - 6.30 PM</td></tr>
        <tr><td>Sun: 10.00AM - 2.00 PM</td></tr>
        </tbody>
        </table>
        </div>
        <div>
        <div className='footer-column-headings'>LOCATION</div><hr/>
        <div>Mahila Hospital Road<br/>Near Cholera Ward, Jagdishpur <br/>Ballia, Uttar Pradesh - 277001</div>
        </div>
        <div>
        <div className='footer-column-headings'>CONTACT</div><hr/>
        <div>Mob: +91-9205570105</div>
        <div>Mob: +91-7007570680</div>
        <div>Email: rpclinic@gmail.com</div>
        </div>
        <div>
        <div className='footer-column-headings'>ON SOCIAL MEDIA</div><hr/>
        <SocialMediaHandles/>
        </div>
        </div>
    </div>
  );
}

export default Footer