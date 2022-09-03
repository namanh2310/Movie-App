import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchSeries } from "../../features/netflixSlice";
import MovieListing from "../MovieListing/MovieListing";
import Tag from "../Tag/Tag";
import Search from "../Search/Search";
import { useParams } from "react-router-dom";
import "./Home.css";

function Home() {
  const auth = useSelector((state) => state.netflix.auth);
  console.log(auth);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("movie");
  const title = useRef();
  const year = useRef();
  const { titleS, yearS, page, type } = useParams();

  useEffect(() => {
    category === "movie"
      ? dispatch(fetchMovies({ title: titleS, year: yearS, page: page }))
      : dispatch(fetchSeries({ title: titleS, year: yearS, page: page }));
  }, [dispatch, titleS, yearS, page, type, category]);

  return (
    <div className="home-container">
      <Search title={title} year={year} category={category} />
      <Tag
        title={title}
        year={year}
        category={category}
        setCategory={setCategory}
      />
      <MovieListing
        category={category}
        titleS={titleS}
        yearS={yearS}
        pageNumber={page}
      />
    </div>
  );
}

export default Home;
