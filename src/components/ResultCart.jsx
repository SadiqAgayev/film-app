import React from "react";

const ResultCart = ({ movie }) => {
  console.log(movie);
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={`movie.poster_path`}
        />
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
          <h4 className="release-date">
            <b>{movie.vote_average ? movie.vote_average : "-"}</b>
          </h4>
        </div>
      </div>

      <div className="controls">
        <button className="btn">Add to Watchlist</button>
      </div>
    </div>
  );
};

export default ResultCart;
