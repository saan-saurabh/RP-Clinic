import React from 'react';
import serviceImg from './serviceImg.png';
import './ServiceDemo.css';

function ServiceDemo() {
    return (
        <div className='service-section-main-div'>
            <div className='service-section-header'>
                Our Services
            </div>
        <div className='service-section-description-div'>
            <div className='service-section-div-one'>
                <img className="service-section-img" src={serviceImg} alt="service-img"/>
            </div>
            <div className='service-section-div-two'>
                <div className='service-card-one'>
                    <div className='description-wrapper'>
                    <div className='number-header'>
                        1
                    </div>
                    <div className='description-block'>
                    <div className='service-header'>
                    Orthopedic Consultations
                    </div>
                    <div className='service-description'>
                    <p>Patients can discuss their syptoms,medical history and concerns with us, We do physical examination,imging or lab
                        tests and provide a diagnosis.</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='service-card-one'>
                    <div className='description-wrapper'>
                    <div className='number-header'>
                        2
                    </div>
                    <div className='description-block'>
                    <div className='service-header'>
                    Non-Surgical Treatments
                    </div>
                    <div className='service-description'>
                    <p> We Provide non-surgical treatments which include physical therapy,rehabilitative eercises,splinting,medications.</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='service-card-one'>
                    <div className='description-wrapper'>
                    <div className='number-header'>
                        3
                    </div>
                    <div className='description-block'>
                    <div className='service-header'>
                    Surgical Procedures
                    </div>
                    <div className='service-description'>
                    <p>RP Clinic provides all kind of orthopedic srugries including hip or knee replacement,arthroscopy,fracture repair,ligament
                        or tendon repair and spinal surgery.</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='service-card-one'>
                    <div className='description-wrapper'>
                    <div className='number-header'>
                        4
                    </div>
                    <div className='description-block'>
                    <div className='service-header'>
                    Diagnostic Imaging
                    </div>
                    <div className='service-description'>
                    <p>RP Clinic has advanced imaging technology, such as -rays,MRI,CT scans and ultrasound machines to help diagnose and evaluate
                        orthopedic conditions.</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='service-card-one'>
                    <div className='description-wrapper'>
                    <div className='number-header'>
                        5
                    </div>
                    <div className='description-block'>
                    <div className='service-header'>
                    Sports Medicine
                    </div>
                    <div className='service-description'>
                    <p>We provide services like injury evaluations,concussion management,performance optimization and personalized treatment
                        plan for sports-related orthopedic conditions.</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='service-card-one'>
                    <div className='description-wrapper'>
                    <div className='number-header'>
                        6
                    </div>
                    <div className='description-block'>
                    <div className='service-header'>
                    Rehabilitation & Physical Therapy
                    </div>
                    <div className='service-description'>
                    <p> We also have dedicated rehabiliation centres or work closely with physical therapy provides to help patients
                        recover and regain function after surgery or injury.</p>
                    </div>
                    </div>
                    </div>
                </div>

            </div>

        </div>
        </div>
    )
}

export default ServiceDemo