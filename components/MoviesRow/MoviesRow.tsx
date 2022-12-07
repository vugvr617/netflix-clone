import { useState, useRef } from "react";
import { IMovie } from "../../interfaces/IData.d";
import MovieThumbnail from "./MovieThumbnail";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

interface IMoviesRowProps {
  title: string;
  moviesData: Array<IMovie>;
}

const MoviesRow = ({ title, moviesData }: IMoviesRowProps) => {
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const rowRef = useRef<HTMLDivElement>(null);

  const handleMove = (direction: string) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollCoordinate =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollCoordinate, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-md font-medium md:text-lg lg:text-xl cursor-pointer max-w-fit transition duration-200 hover:text-[white]">
        {title}
      </h2>
      <div
        ref={rowRef}
        className="group flex items-center scrollbar-hide gap-2 md:gap-3 overflow-x-scroll w-[100%]"
      >
        <ChevronLeftIcon
          onClick={() => handleMove("left")}
          className="absolute h-8 w-8 z-40 cursor-pointer opacity-0 left-10 transition duration-300 m-auto group-hover:opacity-100 hover:h-9 hover:w-9" 
        />
        <ChevronRightIcon
          onClick={() => handleMove("right")}
          className="absolute m-auto h-8 w-8 z-40 cursor-pointer right-10 opacity-0 transition duration-300 group-hover:opacity-100 hover:h-9 hover:w-9"
        />
        {moviesData.map((movie) => {
          return (
            <div className="relative">
              <MovieThumbnail movie={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesRow;
