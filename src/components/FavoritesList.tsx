import { MovieElement } from "../types";
import MovieCard from "./MovieCard";
import "../styles/favorites.css";
import { useFavorites } from "../context/FavoritesContext";

export const FavoritesList = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <>
        <h2>Favorite movies</h2>
        <p className="notAdded">
          There are no favorited movie. Try to search then add one.
        </p>
      </>
    );
  }

  return (
    <>
      <h2>Favorite movies</h2>
      <div className="favoritesContainer">
        {favorites.map((val: MovieElement) => (
          <MovieCard key={val.id} {...val} />
        ))}
      </div>
    </>
  );
};
