import React from 'react'
import background from './stethoscopePic.png'
import './MainCrousel.css'

function MainCrousel() {
    const myStyle = {
        backgroundImage: `url(${background})`,
        height: "90vh",
        marginTop: "-70px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
return (
    <div className='crousel-wrapper-div'>
        <div style={myStyle}>
        </div>
    </div>
);
}

export default MainCrousel