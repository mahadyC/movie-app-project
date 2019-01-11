
const api:string = 'https://api.themoviedb.org/3/movie';
const api_key:string = '6967cee9cc59f52e93c808a84b4f758e';

export const getPopularMovies = () =>
  fetch(`${api}/popular?api_key=${api_key}&language=en-US&page=1`)
    .then(res => res.json())
    .then(data => data.results)
