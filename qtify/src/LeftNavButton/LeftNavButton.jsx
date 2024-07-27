import React from 'react';
import { useSwiper } from 'swiper/react';
import { ReactComponent as LeftNavIcon } from "../assets/leftnav-button.svg";
import '../Carousel/Carousel.css';

const LeftNavButton = () => {
    const swiper = useSwiper();
    return (
        <button onClick={() => swiper.slidePrev()} className="nav-button swiper-button-prev">
            <LeftNavIcon />
        </button>
    );
};

export default LeftNavButton;
