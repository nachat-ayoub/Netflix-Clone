import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../requests";

import "../css/Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const img_base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function FetchData() {
      const req = await axios.get(requests.fetchNetflixOriginals);
      const data =
        req.data.results[Math.floor(Math.random() * req.data.results.length)];
      //   console.log(data);
      setMovie(data);

      return req;
    }
    FetchData();
  }, []);

  function sliceText(text, n) {
    return text?.length > n ? text.slice(0, n - 1) + "..." : text;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${img_base_url}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        {/* Title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* Buttons */}
        <div className="banner_btns">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
        </div>
        {/* Description */}
        <p className="banner_description">{sliceText(movie?.overview, 150)}</p>
      </div>
      <div className="banner_bottomShadow"></div>
    </header>
  );
};

export default Banner;
