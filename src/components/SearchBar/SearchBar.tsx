import React, { useEffect, useState } from "react";
import { TextField, Grid, Button, ListItemText } from "@material-ui/core";
import "./SearchBar.css";
import { getGenres, getMovies } from "../../api/Api";
import Genres from "../Genres/Genres";
import Movies from "../Movies/Movies";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };
  const [hasFocus, setHasFocus] = useState(false);

  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  // const searchMovies = async (searchQuery: string | null) => {
  //   const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=bfc254e2b125ff94dc0d6d6ed75c9948&language=en-US`;
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   return data;
  // };

  const onButtonClick = async () => {
    // if (searchQuery !== null && searchQuery !== "" && searchQuery.length > 0) {
    // const result = searchMovies(searchQuery);
    // const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=bfc254e2b125ff94dc0d6d6ed75c9948&language=en-US`;
    // const res = await fetch(url);
    // const data = await res.json();

    // setGenres(
    //   genres = getGenres();
    // })
    const genresData = await getGenres();
    setGenres(genresData);
    // console.log(data);

    const moviesData = await getMovies();
    setMovies(moviesData);
    // console.log(moviesData);
    // }
  };

  return (
    <div>
      <div className="SearchBar">
        <Grid className="SearchBar-TextBox">
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter cuisine"
            error={hasFocus && searchQuery === ""}
            value={searchQuery}
            onChange={(e) => handleSearchQueryChange(e.target.value)}
          />
        </Grid>

        <Grid className="SearchBar-SearchButton">
          <Button variant="contained" color="primary" onClick={onButtonClick}>
            Let's Explore
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default SearchBar;
