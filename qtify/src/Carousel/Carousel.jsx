import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./Carousel.css";
import LeftNavButton from "../LeftNavButton/LeftNavButton";
import RightNavButton from "../RightNavButton/RightNavButton";

const Carousel = ({ items }) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>{item}</SwiperSlide>
        ))}
      </Swiper>
      <LeftNavButton />
      <RightNavButton />
    </div>
  );
};

export default Carousel;
