import { useState, useEffect } from "react";
import { IMovie } from "../../interfaces/IData.d";
import Image from "next/image";
import { BASE_URL } from "../../constants/constants.d";
import { FaPlay } from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai";
import MoviesRow from '../MoviesRow/MoviesRow';

interface IMainPage {
  netflixOriginals: Array<IMovie>;
}

const Banner = ({ netflixOriginals }: IMainPage) => {
  const [randomMovie, setRandomMovie] = useState<IMovie | null>(null);
  useEffect(() => {
    if (netflixOriginals) {
      const randomNumber = Math.floor(Math.random() * netflixOriginals.length);
      const randomMovieData = netflixOriginals[randomNumber];
      setRandomMovie(randomMovieData);
    }
  }, [netflixOriginals]);

  return (
    <div className="flex px-4 md:px-10 flex-col space-y-2 py-16 md:space-y-4 md:h-screen md:justify-center">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${BASE_URL}${
            randomMovie?.backdrop_path || randomMovie?.poster_path
          }`}
          alt="Banner"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
          {randomMovie?.title ||
            randomMovie?.name ||
            randomMovie?.original_name}
        </h1>
        <p className="max-w-s text-xs md:max-w-xl md:text xl lg:max-w-2xl lg:text-2xl">
          {randomMovie?.overview}
        </p>
      </div>
      <div className="flex gap-x-4">
        <button className="banner-button bg-[#e5e5e5] hover:bg-[#e5e5e5b0] text-[#151515]">
          <FaPlay /> Play
        </button>
        <button className="banner-button bg-[#5b5858a2] hover:bg-[#5b58586a]"> 
          <AiOutlineInfoCircle className="min-h-[25px] min-w-[25px]" /> More Info
        </button>
      </div>
    </div>
  );
};

export default Banner;
