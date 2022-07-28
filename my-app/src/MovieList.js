import { useContext } from "react";
import Movies from "./Movies";
import { MovieCo } from "./MovieCo";

function MovieList() {
  const [movies, setMovies] = useContext(MovieCo);
  return (
    <div>
    {movies.map((movie) => (
        <Movies name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieList;
