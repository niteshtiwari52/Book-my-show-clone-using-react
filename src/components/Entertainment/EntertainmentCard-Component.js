import React from "react";

// swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const EntertainmentCard = (props) => {
  return (
    <>
      <div className="w-full h-30 px-2">
        <img
          className="w-full h-full rounded-lg"
          src={props.src}
          alt="entertainment"
        />
      </div>
    </>
  );
};

const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    "https://res.cloudinary.com/dwht5kew8/image/upload/v1733637120/Book%20My%20Show%20Clone/upskill-collection-202211140440_zztqs4.avif",
    "https://res.cloudinary.com/dwht5kew8/image/upload/v1733637119/Book%20My%20Show%20Clone/music-shows-collection-202211140440_o3vzge.avif",
    "https://res.cloudinary.com/dwht5kew8/image/upload/v1733637119/Book%20My%20Show%20Clone/interactive-games-collection-202211140440_updm8a.avif",
    "https://res.cloudinary.com/dwht5kew8/image/upload/v1733637120/Book%20My%20Show%20Clone/workshop-and-more-web-collection-202211140440_bkryin.avif",
    "https://res.cloudinary.com/dwht5kew8/image/upload/v1733637120/Book%20My%20Show%20Clone/bmshp-desktop-amusement-park-collection-202404190106_t1ybvy.avif",
    "https://res.cloudinary.com/dwht5kew8/image/upload/v1733637120/Book%20My%20Show%20Clone/comedy-shows-collection-202211140440_elpqkc.avif",
    "https://res.cloudinary.com/dwht5kew8/image/upload/v1733637120/Book%20My%20Show%20Clone/arts-crafts-collection-202211140440_wuggbu.avif",
    "https://res.cloudinary.com/dwht5kew8/image/upload/v1733637120/Book%20My%20Show%20Clone/bmshp-desktop-kids-collection-202404190106_rprjor.avif",
    "https://res.cloudinary.com/dwht5kew8/image/upload/v1733637120/Book%20My%20Show%20Clone/cooking-collection-202007222211_egufnx.avif",
    "https://res.cloudinary.com/dwht5kew8/image/upload/v1733637122/Book%20My%20Show%20Clone/holi-parties-web-collection-202402261056_s5ndni.avif",
    "https://res.cloudinary.com/dwht5kew8/image/upload/v1733637120/Book%20My%20Show%20Clone/adventure-collection-202010140844_j0jcla.avif",
  ];

  // settings for sliders
  // swiper settings
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
      <Swiper {...slideConfig}>
        {EntertainmentImage.map((Image, index) => (
          <SwiperSlide>
            <EntertainmentCard src={Image} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default EntertainmentCardSlider;
