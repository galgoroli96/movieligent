import axios from "axios";

const API_KEY = "6402162d140a0c6a951ae5b4718f3bd9";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";

function getMovies(query: string, page: number) {
  return axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query, page },
  });
}

function getImgPath(poster_path: string) {
  return poster_path ? `${IMG_PATH}/${poster_path}` : "/no_image.svg";
}

const MovieService = {
  getMovies,
  getImgPath,
};

export default MovieService;
