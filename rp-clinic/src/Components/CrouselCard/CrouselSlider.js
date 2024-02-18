import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import stethoscopeImg from './stethoscopePic.png'
import skeletonImg from './skeletonpic.png'

function CrouselSlider() {
    return (
        <Carousel showThumbs={false} showArrows={false} showStatus={false} autoPlay infiniteLoop transitiontime="5000">
            <div>
                <img src={stethoscopeImg} alt="Image 1"/>
            </div>
            <div>
                <img src={skeletonImg} alt="Image 2" />
            </div>
        </Carousel>
    )
}

export default CrouselSlider