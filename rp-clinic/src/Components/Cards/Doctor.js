import React from 'react';
import DrSanjayProfileImg from './DrSanjayProfileImg.jpg';
import './Doctor.css';

function Doctor() {
  return (
    <div className='main'>
        <span className='name-heading'>Know Your <span className='customized-doctor-heading'>Doctor!</span></span>
        <div className='wrapper'>
        <div className='inside'>
            <div className='img'>
            <img src={DrSanjayProfileImg} alt='Dr Sanjay' width='150px' height='150px'/><br/>
                <span className='doctor-name'>DR. SANJAY KUMAR</span>
                <br/>
                <span className='doctor-qualification'>MBBS,D-ORTHO,DNB-ORTHO</span>   
            </div>
            <div className='description'>
            <span className='profile-details'>
                    Dr. Sanjay is an experienced doctor having 8+ years of experience in the field of Orthopedics.He had served some of countrie's 
                    well recognised hospitals.He has served as Ex-Senior Resedential doctor at Medanta-The Medicity, Gurugram and Apollo hospitals, New-Delhi
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
    </div>
  );
}

export default Doctor