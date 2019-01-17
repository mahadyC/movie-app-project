
const api: string = 'https://api.themoviedb.org/3/movie';
const API_KEY: string = process.env.REACT_APP_TMDB_API_KEY!;

export const getPopularMovies = () =>
  fetch(`${api}/popular?api_key=${API_KEY}&page=1`)
    .then(res => res.json())
    .then(data => data.results)

export const getMovieDetail = (movieId: string) =>
  fetch(`${api}/${movieId}?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => data.genres)