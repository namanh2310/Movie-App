import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tag.css";

function Tag({ title, year, category, setCategory }) {
  const navigate = useNavigate();

  return (
    <div className="home-select-tag">
      <div
        style={category === "movie" ? { fontWeight: 600 } : {}}
        className="header-movie header-tag"
        onClick={() => {
          setCategory("movie");
          navigate(
            `/movie/${
              title.current.value === "" ? "Harry Potter" : title.current.value
            }/${year.current.value === "" ? "years" : year.current.value}/1`
          );
        }}
      >
        Movies
      </div>
      <div
        style={category === "series" ? { fontWeight: 600 } : {}}
        className="header-seri header-tag"
        onClick={() => {
          setCategory("series");
          navigate(
            `/series/${
              title.current.value === "" ? "Harry Potter" : title.current.value
            }/${year.current.value === "" ? "years" : year.current.value}/1`
          );
        }}
      >
        Series
      </div>
    </div>
  );
}

export default Tag;
