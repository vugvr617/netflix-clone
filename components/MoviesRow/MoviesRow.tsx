import { IMovie } from "../../interfaces/IData.d";
interface IMoviesRowProps {
  title: string;
  // moviesData: Array<IMovie>
}

const MoviesRow = ({ title }: IMoviesRowProps) => {
  return (
    <div className="y-space-2 w-[90%]">
        <h2>{title}</h2>
    </div>
  );
};

export default MoviesRow;
