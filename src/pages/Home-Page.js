import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard-Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel-Component";
import PosterSlider from "../components/PosterSlider/PosterSlider-Component";

// Layout HOC
import DefaultLayoutHoc from "../layout/Default-layout";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMoives] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=95a530407eeb06f446cf83828532d3ec"
      );
      setRecommendedMoives(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Recommended Movies"
            subtitle="Brand new releases every friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PosterSlider
          title="Online Streaming Events"
          subtitle="Brand new releases every friday"
          posters={recommendedMovies}
          isDark={true}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
