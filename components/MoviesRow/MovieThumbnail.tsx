import Image from "next/image";
import { IMovie } from "../../interfaces/IData.d";
import { useAppDispatch } from "../../store/hooks";
import { setModalShown } from "../../store/modalReducer";
import { setCurrentMovie } from "../../store/modalReducer";

interface IMovieThumbnailProps {
  movie: IMovie;
}

const MovieThumbnail = ({ movie }: IMovieThumbnailProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setCurrentMovie(movie));
    dispatch(setModalShown(true));
  };

  return (
    <div
      onClick={handleClick}
      className="relative transition-all duration-500 ease-out h-[100px] min-w-[200px] md:h-[130px] md:min-w-[240px] lg:h-[160px] lg:min-w-[280px]"
    >
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
