import { useNavigate } from "react-router-dom";
import "./Search.css";

function Search({ title, year, setSearch, category }) {
  const navigate = useNavigate();

  return (
    <div className="search-field">
      <input
        className="search-title-field input"
        ref={title}
        type="text"
        placeholder="Title"
      />

      <input
        className="search-year-field input"
        ref={year}
        type="text"
        placeholder="Year"
      />

      <button
        className="search-btn"
        onClick={() => {
          navigate(
            `/${category}/${title.current.value.trim() || " "}/${
              year.current.value.trim() || "years"
            }/1`
          );
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
