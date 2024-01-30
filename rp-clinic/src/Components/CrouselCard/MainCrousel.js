import React from 'react'
import './MainCrousel.css'

function MainCrousel() {
return (
    <div className='crousel-wrapper-div'>
        <div style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/stethoscopePic.png'})`,
  backgroundRepeat: 'no-repeat',
  width:'250px', height:'100px' 
}}>
        </div>
    </div>
);
}

export default MainCrousel