
const api: string = 'https://api.themoviedb.org/3/movie';
const API_KEY: string = process.env.REACT_APP_TMDB_API_KEY!;

export const getPopularMovies = () =>
  fetch(`${api}/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res => res.json())
    .then(data => data.results)
