import Image from "next/image";
import { IMovie } from "../../interfaces/IData.d";

interface IMovieThumbnailProps {
  movie: IMovie;
}

const MovieThumbnail = ({ movie }: IMovieThumbnailProps) => {
  return (
    <div className="relative transition-all duration-500 ease-out h-[100px] min-w-[200px] md:h-[130px] md:min-w-[240px] lg:h-[160px] lg:min-w-[280px]">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        layout="fill"
        alt={"Thumbnail"}
        objectFit="cover"
        className="rounded-sm object-cover"
      />
    </div>
  );
};

export default MovieThumbnail;