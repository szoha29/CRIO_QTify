import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import LeftNavButton from "../LeftNavButton/LeftNavButton";
import RightNavButton from "../RightNavButton/RightNavButton";
import "../Carousel/Carousel.css";

const Carousel = ({ items }) => {
  const swiperRef = useRef(null);

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]} 
        spaceBetween={20}
        slidesPerView={"auto"}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          nextEl: ".right-nav-button",
          prevEl: ".left-nav-button",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
      <LeftNavButton swiperRef={swiperRef} />
      <RightNavButton swiperRef={swiperRef} />
    </div>
  );
};

export default Carousel;
