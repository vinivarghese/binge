import React, { useEffect, useState } from "react";
import { Grid, CardActionArea, CardContent, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import SearchBar from "../SearchBar/SearchBar";
import EditMovie from "../EditMovie/EditMovie";
import EditButonImage from "../Movies/Images/EditIcon.svg";
import DeleteButonImage from "../Movies/Images/DeleteIcon.svg";
import DeleteHoveredButonImage from "../Movies/Images/DeleteHoveredIcon.svg";
import Modal from "react-bootstrap/Modal";
import { deleteMovie } from "../../api/Api";
import "./Movies.css";

import { getMovieById } from "../../api/Api";

interface IMovieCardProps {
  Name: any[];
  Description: any[];
  ReleaseYear: any[];
  UserId: any[];
  MovieId: any[];
}

const Movies = ({ movie }: any) => {
  const [editMovie, setEditMovie] = useState({});
  const [edit, setEdit] = useState(false);

  const onEditClick = async (movieId: any) => {
    const movieData = await getMovieById(movieId);
    const editMovieData = movieData;
    setEditMovie(editMovieData);
    setEdit(true);
  };

  const selectedMovie = <EditMovie movie={editMovie} />;

  const [imgSrc, setImgSrc] = useState(DeleteButonImage);

  const onDeleteHovered = (isHovered: boolean) => {
    if (isHovered) {
      setImgSrc(DeleteHoveredButonImage);
    } else {
      setImgSrc(DeleteButonImage);
    }
  };

  const onDeleteClick = async (movieId: any) => {
    if (window.confirm("Are you sure?")) {
      await deleteMovie(movieId);
    }
  };

  function MyVerticallyCenteredModal(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Movie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedMovie}</Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const [modalShow, setModalShow] = useState(false);

  if (!edit) {
    return (
      <div>
        <Card className="MovieCardContainer">
          <CardActionArea>
            <CardContent>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  onEditClick(movie.movieId);
                  setModalShow(true);
                }}
              >
                <img src={EditButonImage} alt="Edit" />
              </Button>
              <Button
                variant="contained"
                color="primary"
                onMouseOver={() => onDeleteHovered(true)}
                onMouseLeave={() => onDeleteHovered(false)}
                onClick={() => onDeleteClick(movie.movieId)}
              >
                <img src={imgSrc} alt="Edit" />
              </Button>

              <Typography component="p" className="MovieCardDetails">
                {movie.movieName}
              </Typography>
              <Typography component="p" className="MovieCardDetails">
                {movie.description}
              </Typography>
              <Typography component="p" className="MovieCardDetails">
                {movie.releaseYear}
              </Typography>
              <Typography component="p" className="MovieCardDetails">
                {movie.movieId}
              </Typography>
              <Typography component="p" className="MovieCardDetails">
                {movie.userId}
              </Typography>
              <Typography component="p" className="MovieCardDetails">
                {movie.rating}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* {movie.map((m: any) => (
        <AddorEditMovie movie={m} />
      ))} */}
        {/* <AddorEditMovie movie={movie} /> */}
      </div>
    );
  } else {
    // return <AddorEditMovie movie={editMovie} />;
    return (
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    );
  }
};

export default Movies;
