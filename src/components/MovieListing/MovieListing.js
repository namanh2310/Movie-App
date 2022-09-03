import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import SeriCard from "../SeriCard/SeriCard";
import Pagination from "../Pagination/Pagination";
import MovieDetail from "../MovieDetail/MovieDetail";
import "./MovieListing.css";

const MovieListing = ({
  titleS,
  yearS,
  pageNumber,
  setPageNumber,
  category,
}) => {
  const movies = useSelector((state) => state.netflix.movies);
  const series = useSelector((state) => state.netflix.series);
  const loading = useSelector((state) => state.netflix.loading);
  const openCheck = useSelector((state) => state.netflix.isOpening);
  const modalData = useSelector((state) => state.netflix.modalData);
  return (
    <>
      {loading && <div className="loading"></div>}
      {!movies.Error ? (
        <>
          {category === "movie" ? (
            <div className="movie-card-container" style={{ color: "white" }}>
              {movies.Response === "True" &&
                movies.Search.map((movie, index) => (
                  <MovieCard key={index} id={index} movie={movie} />
                ))}
            </div>
          ) : (
            <div className="movie-card-container" style={{ color: "white" }}>
              {series.Response === "True" &&
                series.Search.map((seri, index) => (
                  <SeriCard id={index} seri={seri} />
                ))}
            </div>
          )}

          <Pagination
            category={category}
            moviesLength={movies.totalResults}
            seriesLength={series.totalResults}
            titleS={titleS}
            yearS={yearS}
            pageNumber={pageNumber}
            loading={loading}
          />
          {openCheck && <MovieDetail modalData={modalData} />}
        </>
      ) : (
        <h3 className="error-noti">
          There are no results that match your search "{titleS}"{" "}
        </h3>
      )}
    </>
  );
};

export default MovieListing;
