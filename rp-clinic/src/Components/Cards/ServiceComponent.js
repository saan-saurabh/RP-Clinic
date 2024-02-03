import React from 'react';
import './ServiceComponent.css';

function ServiceComponent() {
    return (
        <div className='service-component-main-div'>
            <div className='our-service-heading'>Our Services</div>
            <div className='service-card-wrapper'>
                <div className='service-card'>
                    <div className='service-card-heading'>
                        Orthopedic Consultations
                    </div>
                    <div className='service-card-details'>
                        <p>Patients can discuss their syptoms,medical history and concerns with us, We do physical examination,imging or lab
                        tests and provide a diagnosis.</p>
                    </div>
                </div>
                <div className='service-card'>
                    <div className='service-card-heading'>
                        Non-Surgical Treatments
                    </div>
                    <div className='service-card-details'>
                       <p> We Provide non-surgical treatments which include physical therapy,rehabilitative eercises,splinting,medications.</p>
                    </div>
                </div>
                <div className='service-card'>
                    <div className='service-card-heading'>
                        Surgical Procedures
                    </div>
                    <div className='service-card-details'>
                        <p>RP Clinic provides all kind of orthopedic srugries including hip or knee replacement,arthroscopy,fracture repair,ligament
                        or tendon repair and spinal surgery.</p>
                    </div>
                </div>
                </div>
                <div className='service-card-wrapper'>
                <div className='service-card'>
                    <div className='service-card-heading'>
                        Diagnostic Imaging
                    </div>
                    <div className='service-card-details'>
                        <p>RP Clinic has advanced imaging technology, such as -rays,MRI,CT scans and ultrasound machines to help diagnose and evaluate
                        orthopedic conditions.</p>
                    </div>
                </div>
                <div className='service-card'>
                    <div className='service-card-heading'>
                        Sports Medicine
                    </div>
                    <div className='service-card-details'>
                        <p>We provide services like injury evaluations,concussion management,performance optimization and personalized treatment
                        plan for sports-related orthopedic conditions.</p>
                    </div>
                </div>
                <div className='service-card'>
                    <div className='service-card-heading'>
                        Rehabilitation & Physical Therapy
                    </div>
                    <div className='service-card-details'>
                      <p> We also have dedicated rehabiliation centres or work closely with physical therapy provides to help patients
                        recover and regain function after surgery or injury.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceComponent;