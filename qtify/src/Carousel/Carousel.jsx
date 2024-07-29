import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./Carousel.css";
import LeftNavButton from "../LeftNavButton/LeftNavButton";
import RightNavButton from "../RightNavButton/RightNavButton";

const Carousel = ({ items }) => {
  //Added useRef to use in Right Nav Button
  const swiperRef = useRef(null);

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".right-nav-button",
          prevEl: ".left-nav-button",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
      <LeftNavButton />
      <RightNavButton swiperRef={swiperRef} />
    </div>
  );
};

export default Carousel;
