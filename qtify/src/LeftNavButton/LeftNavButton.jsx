import React from "react";
import "../Carousel/Carousel.css";
import { useSwiperSlide } from "swiper/react";

const LeftNavButton = () => {
  const swiper = useSwiperSlide();
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="left-nav-button"
      aria-label="Previous"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="#34C94B" />
        <path
          d="M19 7.9375C18.375 7.375 17.4375 7.375 16.875 7.9375L9.875 14.9375C9.625 15.25 9.5 15.625 9.5 16C9.5 16.4375 9.625 16.8125 9.9375 17.0625L16.9375 24.0625C17.5 24.6875 18.4375 24.6875 19 24.0625C19.625 23.5 19.625 22.5625 19 22L13.0625 16L19 10.0625C19.625 9.5 19.625 8.5625 19 7.9375Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default LeftNavButton;
