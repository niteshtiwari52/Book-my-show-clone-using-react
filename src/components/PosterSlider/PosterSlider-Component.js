import React from "react";
import Poster from "../Poster/Poster-Component.js";
// swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const PosterSlider = (props) => {
  const { posters, title, subtitle, isDark, config } = props;
  const slideConfig = {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    modules: [Navigation],
    className: "mySwiper",
    navigation: true,
  };


  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 ml-0 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subtitle}
        </p>
      </div>
      
      {config && (
        <Swiper {...config}>
          {posters.map((each, index) => (
             <SwiperSlide>
            <Poster {...each} isDark={isDark} key={index} />
            </SwiperSlide>
          ))}
       </Swiper>
      )}
     
      {!config && (
        <Swiper {...slideConfig}>
          {posters.map((each, index) => (
            <SwiperSlide>
            <Poster {...each} isDark={isDark} key={index} />
            </SwiperSlide>
          ))}
         </Swiper>
      )}

    </>
  );
};

export default PosterSlider;
