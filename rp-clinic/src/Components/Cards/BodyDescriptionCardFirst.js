import React from 'react'
import './BodyDescriptionCardFirst.css'

function BodyDescriptionCardFirst() {
  return (
    <div className="main-division">
        <center><p className='main-div-heading'>The Most <span>Advanced & Trusted</span> Orthopedic Clinic.</p></center>
        <div className="inside-cards">
            <div className="description-cards">
              <span> Advanced Equipments</span>
              <p>We are equiped with all modern day high technology equipments.</p>
            </div>
            <div className="description-cards">
               <span>Qualified Doctor</span>
               <p>Our Highly qualified doctor is well experienced in the field of Orthopedic.</p> 
            </div>
            <div className="description-cards">
            <span>Personal Care</span>
            <p>We, here at our place treat you like our guest and provide you one on one consultation. </p> 
            </div>
            
        </div>
        
    </div>
  );
}

export default BodyDescriptionCardFirst