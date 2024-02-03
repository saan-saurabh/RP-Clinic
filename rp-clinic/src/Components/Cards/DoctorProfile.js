import React from 'react';
import DrSanjayProfileImg from './DrSanjayProfileImg.jpg'
import './DoctorProfile.css';


function DoctorProfile() {
  return (
    <div className='profile-maain-div'>
        <div className='img-description-wrapper'>
            <div className='profile-name-img-div'>
                <img src={DrSanjayProfileImg} alt='Dr Sanjay' width='150px' height='150px'/><br/>
                <span className='doctor-name'>DR. SANJAY KUMAR</span>
                <br/>
                <span className='doctor-qualification'>MBBS, MS, DNB (ORTHO) </span>         
            </div>
            <div className='profile-description'>
                <span className='name-heading'>Know Your <span className='customized-doctor-heading'>Doctor!</span></span><br/>
                <span className='profile-details'>
                    Dr. Sanjay is an experienced doctor having 8+ years of experience in the field of OrthopedicsHe had served some of countrie's 
                    well recognised hospitals.He served as ex-resedential doctor in Medanta,The Medicity, Gurugram and Apollo hospitals, Delhi
                    xshkjhk jdzhkjdz jdkzhkdj jzhkckz czjkhckzx kzcjhckhjz jkzhckhck kzcjhkhckz czjkkjckhc nzjkxnkjxz czkjmnkjnx kjczhkcxk kjjzxk
                    cjzhkjbz njkzcknc jckznkncz jzcjknxz kjzknckx kjknc jzkkncxkn nvnvn vjkcnxjknvcxj nkvjzkvck njkvnzkjnvz nvzkjnkv njkzxnkjnzx 
                    vcnkjvc vznkjvz nvnk nvznjnvz
                    xshkjhk jdzhkjdz jdkzhkdj jzhkckz czjkhckzx kzcjhckhjz jkzhckhck kzcjhkhckz czjkkjckhc nzjkxnkjxz czkjmnkjnx kjczhkcxk kjjzxk
                    cjzhkjbz njkzcknc jckznkncz jzcjknxz kjzknckx kjknc jzkkncxkn nvnvn vjkcnxjknvcxj nkvjzkvck njkvnzkjnvz nvzkjnkv njkzxnkjnzx 
                    vcnkjvc vznkjvz nvnk nvznjnvz
                </span>
            </div>
        </div>
    </div>
  );
}

export default DoctorProfile