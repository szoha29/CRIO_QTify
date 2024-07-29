import React from "react";
import { useSwiper } from "swiper/react";
import "../Carousel/Carousel.css";

const RightNavButton = ({ swiperRef }) => {
  // const swiper = useSwiper();
  return (
    <button onClick={() => swiperRef.current?.slideNext()} className="right-nav-button" aria-label="Next">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="#34C94B" />
        <path
          d="M13 7.9375C13.625 7.375 14.5625 7.375 15.125 7.9375L22.125 14.9375C22.375 15.25 22.5 15.625 22.5 16C22.5 16.4375 22.375 16.8125 22.0625 17.0625L15.0625 24.0625C14.5 24.6875 13.5625 24.6875 13 24.0625C12.375 23.5 12.375 22.5625 13 22L18.9375 16L13 10.0625C12.375 9.5 12.375 8.5625 13 7.9375Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default RightNavButton;
