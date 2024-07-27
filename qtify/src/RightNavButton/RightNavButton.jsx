import React from 'react';
import { useSwiper } from 'swiper/react';
import { ReactComponent as RightNavIcon } from "../assets/rightnav-button.svg";
import '../Carousel/Carousel.css';

const RightNavButton = () => {
    const swiper = useSwiper();
    return (
        <button onClick={() => swiper.slideNext()} className="swiper-button-next">
           <RightNavIcon />
        </button>
    );
};

export default RightNavButton;
