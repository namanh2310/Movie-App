import React from "react";
import { openModal } from "../../features/netflixSlice";
import { useDispatch } from "react-redux";
import "./SeriCard.css";

function SeriCard({ id, seri }) {
  const dispatch = useDispatch();

  return (
    <div
      className="seri-card"
      onClick={() => {
        dispatch(
          openModal({
            poster: seri.Poster,
            title: seri.Title,
            id: seri.imdbID,
            type: seri.Type,
          })
        );
      }}
    >
      <img
        className="seri-card-img"
        src={
          seri.Poster === "N/A"
            ? "https://seafood.vasep.com.vn/no-image.png"
            : seri.Poster
        }
        alt=""
      />
      <p className="seri-card-title">{seri.Title}</p>
    </div>
  );
}

export default SeriCard;
