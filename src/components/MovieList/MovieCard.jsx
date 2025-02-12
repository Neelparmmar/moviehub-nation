import React from "react";
import stary from "../../assets/stary.png";
import "./MovieCard.css";
const MovieCard = ({ movie }) => {
  return (
    <a
      href={`http://www.themoviedb.org/movie/${movie.id}`}
      target={"_blank"}
      className="moviecard"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt=""
        className="movieposter"
      />
      <div className="movieDetails">
        <h3 className="movie-detail-heading">{movie.original_title}</h3>
        <div className="align-flex movie-date-rate">
          <p>{movie.release_date}</p>
          <p className="align-flex">
            {movie.vote_average}
            <img src={stary} alt="" className="card-emoji" />
          </p>
        </div>
        <p className="movie-description">
          {movie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
