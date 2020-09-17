import React, { useEffect, useState } from "react";
import { editMovie } from "../../api/Api";
import {
  TextField,
  Grid,
  Button,
  ListItemText,
  FormControl,
  InputLabel,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import Modal from "react-bootstrap/Modal";

const EditMovie = ({ movie }: any) => {
  const [btnVisibility, setBtnVisibility] = useState(true);

  const handleSubmit = async (selectedMovie: any) => {
    console.log(selectedMovie);
    selectedMovie.rating = Number(selectedMovie.rating);
    await editMovie(selectedMovie);
    setBtnVisibility(false);
  };

  const [movieName, setMovieName] = useState(movie.movieName);
  const [movieDescription, setMovieDescription] = useState(movie.description);
  const [movieReleaseYear, setReleaseYear] = useState(movie.releaseYear);
  const [movieRating, setRating] = useState(movie.rating);

  const handleMovieNameChange = (name: string) => {
    setMovieName(name);
    movie.movieName = name;
  };

  const handleMovieDescriptionChange = (description: string) => {
    setMovieDescription(description);
    movie.description = description;
  };

  const handleMovieReleaseYearChange = (releaseYear: string) => {
    const relYear = parseInt(releaseYear);
    setReleaseYear(relYear);
    movie.releaseYear = relYear;
  };

  const handleMovieRatingChange = (rating: string) => {
    setRating(rating);
    movie.rating = rating;
  };

  return (
    <div>
      <div>
        <p>Name</p>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={movieName}
          onChange={(e) => handleMovieNameChange(e.target.value)}
        />
      </div>
      <div>
        <p>Description</p>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={movieDescription}
          onChange={(e) => handleMovieDescriptionChange(e.target.value)}
        />
      </div>
      <div>
        <p>Release Year</p>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={movieReleaseYear}
          onChange={(e) => handleMovieReleaseYearChange(e.target.value)}
        />
      </div>
      <div>
        <p>Rating</p>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={movieRating}
          onChange={(e) => handleMovieRatingChange(e.target.value)}
        />
      </div>
      {/* <input type="submit" value="Cancel" onClick={() => handleCancel()} /> */}
      {btnVisibility && (
        <input
          type="submit"
          value="Save"
          onClick={(event) => handleSubmit(movie)}
        />
      )}
      {/* <input
        type="submit"
        value="Save"
        onClick={(event) => handleSubmit(movie)}
      /> */}
      {/* <Typography component="p" className="GenreCardDetails">
          {movie.movieName}
        </Typography>
        <Typography component="p" className="GenreCardDetails">
          {movie.movieName}
        </Typography>
      </div> */}
      {/* <TextField id="outlined-basic"
            variant="outlined"
            placeholder="Enter cuisine" */}
      {/* // error={hasFocus && searchQuery === ""}
            // value={}
            // onChange={(e) => handleSearchQueryChange(e.target.value)}
            /> */}
      {/* <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form> */}
    </div>
  );
};

export default EditMovie;
