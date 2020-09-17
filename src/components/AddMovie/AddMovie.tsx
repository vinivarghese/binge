import React, { useEffect, useState } from "react";
import { addMovie } from "../../api/Api";
import { TextField, Button } from "@material-ui/core";
import Modal from "react-bootstrap/Modal";

const AddMovie = () => {
  const [btnVisibility, setBtnVisibility] = useState(true);
  const [movie, setMovie] = useState({
    movieStruct: {
      movieName: "",
      description: "",
      releaseYear: 0,
      rating: 0,
      genreId: 4,
      userId: "vini.varghese91@gmail.com",
    },
  });

  const handleSubmit = async () => {
    console.log("submit");
    console.log(movieName, movieDescription, movieReleaseYear, movieRating);

    setMovie({
      ...movie,
      movieStruct: {
        movieName: movieName,
        description: movieDescription,
        releaseYear: movieReleaseYear,
        rating: Number(movieRating),
        genreId: 4,
        userId: "vini.varghese91@gmail.com",
      },
    });

    await addMovie(movie);
    setBtnVisibility(false);
  };

  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieReleaseYear, setReleaseYear] = useState(0);
  const [movieRating, setRating] = useState("0");

  const handleMovieNameChange = (name: string) => {
    setMovieName(name);
  };

  const handleMovieDescriptionChange = (description: string) => {
    setMovieDescription(description);
  };

  const handleMovieReleaseYearChange = (releaseYear: string) => {
    const relYear = parseInt(releaseYear);
    setReleaseYear(relYear);
  };

  const handleMovieRatingChange = (rating: string) => {
    setRating(rating);
  };

  useEffect(() => {
    setMovie({
      ...movie,
      movieStruct: {
        movieName: movieName,
        description: movieDescription,
        releaseYear: movieReleaseYear,
        rating: Number(movieRating),
        genreId: 4,
        userId: "vini.varghese91@gmail.com",
      },
    });
  }, [movieName, movieDescription, movieReleaseYear, movieRating]);

  return (
    <div className="Form-Layout">
      <div className="Text-Fields">
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
      {btnVisibility && (
        <input type="submit" value="Save" onClick={() => handleSubmit()} />
      )}
    </div>
  );
};

export default AddMovie;
