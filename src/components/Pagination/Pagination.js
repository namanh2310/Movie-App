import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import "./Pagination.css";
function Pagination({
  category,
  moviesLength,
  seriesLength,
  titleS,
  yearS,
  pageNumber,
  loading,
}) {
  const pageLength =
    category === "movie"
      ? Math.ceil(parseInt(moviesLength) / 10)
      : Math.ceil(parseInt(seriesLength) / 10);

  const [pageArr, setPageArr] = useState([1, 2, 3, 4, 5]);

  const navigate = useNavigate();

  return (
    <div className="pagination-field">
      {pageArr[0] > 1 && !loading && (
        <button
          className="pagination-prev-btn btn"
          onClick={() => setPageArr(pageArr.map((page) => page - 5))}
        >
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>
      )}
      {pageArr.map(
        (page, index) =>
          page <= pageLength && (
            <button
              style={
                page === parseInt(pageNumber)
                  ? { backgroundColor: "rgba(255, 255, 255, 0.185)" }
                  : {}
              }
              key={index}
              className="pagination-block btn"
              onClick={() => {
                // getPageNumber(page);
                navigate(`/${category}/${titleS}/${yearS || "years"}/${page}`);
              }}
            >
              {page}
            </button>
          )
      )}
      {pageArr[pageArr.length - 1] < pageLength && !loading && (
        <button
          className="pagination-next-btn btn"
          onClick={(e) => {
            setPageArr(pageArr.map((page) => page + 5));
          }}
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </button>
      )}
    </div>
  );
}

export default Pagination;
