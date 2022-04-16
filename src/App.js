import { useEffect, useState } from "react";
import axios from "axios";

import Home from "./Pages/Home";

import MainTemplate from "./Utils/Templates/MainTemplate";

import { Routes, Route } from "react-router-dom";
import Watchlist from "./Pages/Watchlist";
import Watched from "./Pages/Watched";
import SingleMovie from "./Components/SingleMovie";

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const getMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=c85eb514811130824d0c5fb9eb349e8f&language=en-US&page=1`
      );
      setMovies(getMovies.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <MainTemplate>
        <Routes>
          <Route exact path="/" element={<Home movies={movies} />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/moves/:single" element={<SingleMovie />} />
        </Routes>
      </MainTemplate>
    </>
  );
};

export default App;
