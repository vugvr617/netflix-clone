import { IMovie } from "../../interfaces/IData.d";
import MovieThumbnail from "./MovieThumbnail";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

interface IMoviesRowProps {
  title: string;
  moviesData: Array<IMovie>;
}

const MoviesRow = ({ title, moviesData }: IMoviesRowProps) => {
  return (
    <div className="flex flex-col space-y-4 max-w-screen">
      <h2 className="text-md md:text-lg lg:text-xl cursor-pointer max-w-fit transition duration-200 hover:text-[white]">
        {title}
      </h2>
      <div className="group relative flex items-center scrollbar-hide space-x-2 md:space-x-3 overflow-x-scroll w-[100%]">
        <ChevronLeftIcon className="absolute h-10 w-10 z-40 cursor-pointer opacity-0 left-3 transition duration-200 m-auto group-hover:opacity-100" />
        <ChevronRightIcon className="absolute m-auto h-10 w-10 z-40 cursor-pointer right-0 opacity-0 transition duration-200 group-hover:opacity-100"/>
        {moviesData.map((movie) => {
          return (
            <div className="relative h-[100px] min-w-[200px] md:h-[130px] md:min-w-[240px] lg:h-[160px] lg:min-w-[280px]">
              <MovieThumbnail movie={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesRow;
