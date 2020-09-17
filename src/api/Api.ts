import { MovieInfo } from "../Common/Interfaces";

const API_BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

// const CUISINES_API_URL = API_BASE_URL + "/"

let movieList: any;

export const getGenres = async () => {
  //   const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=bfc254e2b125ff94dc0d6d6ed75c9948&language=en-US`;
  // const response = await fetch(CUISINES_API_URL + "GetCuisines", {
  //     headers: {
  //         Accept: "application/json",
  //     }
  // }).then(res => res.json()).then(res => JSON.parse(res));
  // return response;
  // const response = await fetch(url, {
  //     headers: {
  //         "Content-Type": "application/json",
  //     }
  // }).then(res => res.json()).then(res => JSON.parse(res));
  // return response;

  // const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=bfc254e2b125ff94dc0d6d6ed75c9948&language=en-US`;
  const url = `https://localhost:5001/GetGenres`;

  // const response = await fetch(url, {
  //   headers: {
  //     "Content-Type": "application/json",
  //   }
  // }).then(res => res.json()).then(res => )
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getMovies = async () => {
  const url = `https://localhost:5001/GetMovies`;
  const res = await fetch(url); //.then(res => res.json).then(res => JSON.parse(res));
  const data = await res.json();
  // const results = JSON.parse(data);
  movieList = data;
  // console.log(data);

  // let movieInfoList = data.array.forEach(element => { element.

  // });

  return data;
};

export const getMovieById = async (id: number) => {
  const selectedMovie = movieList.find((x: any) => x.movieId === id);
  console.log(selectedMovie);
  return selectedMovie;
};

export const getReleaseYears = async (id: number) => {
  const releaseYears = movieList
    .All((x: any) => x.releaseYear !== 0 && x.releaseYear !== null)
    .Distinct((x: any) => x.releaseYear)
    .Select((x: any) => x.releaseYear);
  // console.log(selectedMovie);
  return releaseYears;
};

export const editMovie = async (movie: any) => {
  console.log("Edit window");
  console.log(movie);
  const url = `https://localhost:5001/UpdateMovie`;
  await fetch(url, {
    method: "PUT",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
};

export const addMovie = async (movie: any) => {
  console.log(movie.movieStruct);
  const url = `https://localhost:5001/AddMovie`;
  await fetch(url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie.movieStruct),
  });
};

export const deleteMovie = async (movieId: any) => {
  console.log("Delete api");
  console.log(movieId);
  const url = `https://localhost:5001/DeleteMovie?movieId=${movieId}`;
  await fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  });
};
