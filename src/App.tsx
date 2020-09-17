import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import BingeLogo from "./images/Binge.svg";
import BingeTagLine from "./images/loyalty-binge.svg";
import Genres from "./components/Genres/Genres";
import LoginButton from "./components/LoginButton/LoginButton";
import LogoutButton from "./components/LogoutButton/LogoutButton";
import UserProfile from "./components/UserProfile/UserProfile";
import MovieGrid from "./components/MovieGrid/MovieGrid";
import AddMovie from "./components/AddMovie/AddMovie";
import { Button } from "@material-ui/core";

function App() {
  const [isAdd, setIsAdd] = useState(false);

  const handleAddMovie = () => {
    setIsAdd(true);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="Binge-Logo">
          <img src={BingeLogo} alt="Binge Logo" />
          <h1>Binge</h1>
        </div>
        <div className="Binge-TagLine">
          <img src={BingeTagLine} alt="Binge TagLine" />
          <h3>Falling in love with movies again</h3>
        </div>
      </div>
      <div className="UserDetails">
        <LoginButton />
        <LogoutButton />
        <UserProfile />
      </div>
      <div className="MovieDetails">
        <SearchBar />
        <MovieGrid />
        {/* <input
          type="submit"
          value="Add Movie"
          onClick={() => handleAddMovie()}
        /> */}
        <Button
          color="primary"
          variant="outlined"
          onClick={() => handleAddMovie()}
        >
          Add Movie
        </Button>
        {isAdd && <AddMovie />}
      </div>
      {/* <MovieGrid /> */}
      {/* <BrowserRouter>
        <Switch>
          <Route path="/" component={SearchBar} />
          <Route path="/" component={Genres} />
          <Route path="/" component={MovieGrid} />
          <input
            type="submit"
            value="Add Movie"
            onClick={() => handleAddMovie()}
          />
          {isAdd && <AddMovie />}
        </Switch>
      </BrowserRouter> */}
      <div className="footer">
        <p>&copy; 2020: Binge.com</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;
