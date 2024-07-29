import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "./Carousel.css";
import LeftNavButton from "../LeftNavButton/LeftNavButton";
import RightNavButton from "../RightNavButton/RightNavButton";

const Carousel = ({ items }) => {
  const swiperRef = useRef(null);

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={"auto"}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
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
