import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import MovieLayoutHoc from "../layout/Movie-layout";
import { MovieContext } from "../context/Movie-context";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../components/PosterSlider/PosterSlider-Component";
import MovieHero from "../components/MovieHero/MovieHero-Component";
import Cast from "../components/Cast/Cast-Component.js";
// swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const MoviePage = () => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);

  const [cast, setCast] = useState([]);
  const [SimilarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);

      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );

      setRecommendedMovies(getRecommendedMovies.data.results);
    };

    requestRecommendedMovies();
  }, [id]);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data);
    };

    requestMovie();
  }, [id]);

  const slideSettingCastConfig = {
    slidesPerView: 6,
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
      <MovieHero />
      <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">About the Movie</h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Applicable Offers */}
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offer
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row lg:w-3/4">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* cast and crew slider */}

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">
            Cast and Crew
          </h2>
          
          <Swiper {...slideSettingCastConfig}>
            {cast.map((castData) => (
               <SwiperSlide>
              <Cast
                image={castData.profile_path}
                castName={castData.original_name}
                role={castData.character}
              />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* REcommended movies slider */}
        <div className="my-8">
          <PosterSlider
            
            config={slideConfig}
            title="Recommended Movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Book my show exclusive */}
       
        <PosterSlider
          config={slideConfig}
          title="BMS Exclusive"
          posters={SimilarMovies}
          isDark={false}
        />
        
      </div>
    </>
  );
};

export default MovieLayoutHoc(MoviePage);
