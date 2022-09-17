import React, { useState } from "react";

// for carousel
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows-Components";

const HeroCarousel = () => {
  const [images, setImages] = useState([
    {
      adult: false,
      backdrop_path: "/2RSirqZG949GuRwN38MYCIGG4Od.jpg",
      genre_ids: [53],
      id: 985939,
      original_language: "en",
      original_title: "Fall",
      overview:
        "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights Server : https://divedigital.vip/movie/985939/fall",
      popularity: 7850.038,
      poster_path: "/v28T5F1IygM8vXWZIycfNEm3xcL.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      video: false,
      vote_average: 7.4,
      vote_count: 548,
    },
    {
      adult: false,
      backdrop_path: "/1n7ZGr6WeDOW4rFiQKmFel8baWH.jpg",
      genre_ids: [53, 27],
      id: 760741,
      original_language: "en",
      original_title: "Beast",
      overview:
        "A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.Server : https://divedigital.vip/movie/760741/beast",
      popularity: 5056.663,
      poster_path: "/iRV0IB5xQeOymuGGUBarTecQVAl.jpg",
      release_date: "2022-08-11",
      title: "Beast",
      video: false,
      vote_average: 7.1,
      vote_count: 275,
    },
  ]);

  // settings for sliders

  // for large screen
  const settingLG = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
  };

  // for medium screen
  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      {/* For meduim screen */}
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((images, index) => (
            <div className="w-full h-56 md:h-80 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      {/* For large screen */}
      <div className="hidden lg:block">
        <HeroSlider {...settingLG}>
          {images.map((images, index) => (
            <div className="w-full h-56 md:h-80 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
