import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Movies from "../Movies/Movies";
import { getMovies } from "../../api/Api";
import "./MovieGrid.css";

interface IMovieCard {
  name: any[];
  description: any[];
  releaseYear: any[];
  userId: any[];
  movieId: any[];
}

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const moviesData = await getMovies();
      setMovies(moviesData);
    })();
  }, []);

  const moviesList = movies.map((movie: any) => (
    <Movies key={movie.movieId} movie={movie} />
  ));
  return <div className="MovieGrid">{moviesList}</div>;
};

export default MovieGrid;
