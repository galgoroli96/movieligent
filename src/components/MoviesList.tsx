import React, { useCallback, useState } from "react";
import { MovieElement, Movies } from "../types";
import MovieCard from "./MovieCard";
import "../styles/movies.css";
import CustomPagination from "./CustomPagination";
import { useFilter } from "../context/FilterContext";

export const MoviesList = (props: Movies) => {
  const { page, results, total_pages, total_results, handlePaginationChange } =
    props;
  const { filter } = useFilter();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginationChange = useCallback(
    (page: number) => {
      handlePaginationChange(page);
      setCurrentPage(page);
    },
    [currentPage]
  );

  if (total_results === 0) {
    return (
      <div className="noResults">
        {page === 1 ? (
          <p>
            Ooops! No results found for your search: {filter}. Please try to
            search again.
          </p>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </div>
    );
  }

  return (
    <React.Fragment>
      <h2>Search results:</h2>
      <div className="moviesContainer">
        {results.map((val: MovieElement) => (
          <MovieCard key={val.id} {...val} />
        ))}
      </div>
      <CustomPagination
        currentPage={currentPage}
        total_pages={total_pages}
        pageRange={10}
        onPaginationChange={paginationChange}
      />
    </React.Fragment>
  );
};
