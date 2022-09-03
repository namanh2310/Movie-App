import React from "react";
import { openModal } from "../../features/netflixSlice";
import { useDispatch } from "react-redux";
import "./MovieCard.css";

function MovieCard({ id, movie, seri }) {
  const dispatch = useDispatch();

  return (
    <div
      className="movie-card"
      onClick={() => {
        dispatch(
          openModal({
            poster: movie.Poster,
            title: movie.Title,
            id: movie.imdbID,
            type: movie.Type,
          })
        );
      }}
    >
      <img
        className="movie-card-img"
        src={
          movie.Poster === "N/A"
            ? "https://seafood.vasep.com.vn/no-image.png"
            : movie.Poster
        }
        alt=""
      />
      <p className="movie-card-title">{movie.Title}</p>
    </div>
  );
}

export default MovieCard;
