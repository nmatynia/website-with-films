import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./SearchBar";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("Spiderman");

  useEffect(() => {
    axios(`http://www.omdbapi.com/?t=${searchTitle}&apikey=2c83b370&`)
      .then((response) => {
        setMovies([response.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [searchTitle]);

  const mappedMovies = movies.map((movie, idx) => {
    return (
      <div key={`movie-${idx}`}>
        Title: {movie.Title} <br />
        {/* {movie.imdbID} */}
        <img src={movie.Poster} />
      </div>
    );
  });

  const handleChange = (e) => {
    setSearchTitle(e.target.value);
  };

  return (
    <div className="App">
      <SearchBar input={searchTitle} handleChange={handleChange} />
      {/* {movies.length} */}
      {mappedMovies}
      {searchTitle}
      {JSON.stringify(movies)}
    </div>
  );
}
