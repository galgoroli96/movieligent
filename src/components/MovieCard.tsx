import moment from "moment";
import { MovieElement } from "../types";
import MovieService from "../MovieService";
import "../styles/movies.css";
import { useFavorites } from "../context/FavoritesContext";

function MovieCard(props: MovieElement) {
  const { id, title, release_date, poster_path } = props;
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const releaseDate = release_date ? moment(release_date).format("YYYY") : "-";

  return (
    <figure className="movieCard">
      <img
        className="moviePoster"
        src={MovieService.getImgPath(poster_path)}
        alt={title}
      />
      {isFavorite(id) ? (
        <button
          className="starBtn favoriteItem"
          onClick={() => removeFromFavorites(id)}
        >
          &#9733;
        </button>
      ) : (
        <button
          className="starBtn notFavoriteItem"
          onClick={() => addToFavorites({ ...props })}
        >
          &#9733;
        </button>
      )}
      <figcaption className="movieTitle">
        {title} ({releaseDate})
      </figcaption>
    </figure>
  );
}

export default MovieCard;
