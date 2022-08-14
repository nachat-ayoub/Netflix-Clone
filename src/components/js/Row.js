import React, { useState, useEffect } from "react";
import axios from "../../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import "../css/Row.css";

const img_base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function FetchData() {
      const req = await axios.get(fetchUrl);
      const data = req.data.results;
      setMovies(data);

      return req;
    }
    FetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // get trailer url function :
  function trailerHandler(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="row" key={title}>
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => trailerHandler(movie)}
              key={movie.id}
              alt={movie.name}
              className={`row_poster ${isLargeRow ? "row_LargePoster" : ""}`}
              src={`${img_base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
