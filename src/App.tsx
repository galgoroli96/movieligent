import React, { useEffect, useRef, useState } from "react";
import FilterInput from "./components/FilterInput";
import { MoviesList } from "./components/MoviesList";
import MovieService from "./MovieService";
import { Movies } from "./types";
import "./styles/app.css";
import Loader from "./components/Loader";
import { FavoritesList } from "./components/FavoritesList";
import { useFilter } from "./context/FilterContext";

const moviesInitialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
  handlePaginationChange: () => 1,
};
function App() {
  const [moviesList, setMoviesList] = useState<Movies>(moviesInitialState);
  const { filter } = useFilter();
  const isLoading = useRef(false);

  useEffect(() => {
    isLoading.current = true;
    if (filter.length >= 3) {
      const delayDebounceFn = setTimeout(() => {
        getFilteredMovies(1);
      }, 800);

      return () => clearTimeout(delayDebounceFn);
    } else if (filter === "") {
      setMoviesList(moviesInitialState);
      isLoading.current = false;
    }
  }, [filter]);

  const getFilteredMovies = (page: number) => {
    MovieService.getMovies(filter, page)
      .then((resp) => {
        setMoviesList(resp.data);
      })
      .then(() => (isLoading.current = false));
  };

  const handleSearch = () => {
    getFilteredMovies(1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      getFilteredMovies(1);
    }
  };

  const handlePaginationChange = (page: number) => {
    getFilteredMovies(page);
  };

  return (
    <React.Fragment>
      <h1 className="mainTitle">Movieligent</h1>
      <section className="filterSection">
        <FilterInput
          handleSearch={handleSearch}
          handleKeyDown={handleKeyDown}
        />
      </section>
      <section className="moviesSection">
        <div>
          {isLoading.current ? (
            <Loader />
          ) : (
            <MoviesList
              {...moviesList}
              handlePaginationChange={handlePaginationChange}
            />
          )}
        </div>
        <div>
          <FavoritesList />
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
