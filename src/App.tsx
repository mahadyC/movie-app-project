import React, { Component } from 'react';
import './App.css';
import * as api from './api';
import './movie.css';
import { Route, Link } from 'react-router-dom';
import MovieDetail from './components/movie-detail';
import Home from './components/home';
type Movie = {
  id: string;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

type Genres = {
  id: number;
  name: string;
}

type State = {
  popular_movies: Movie[],
  movie_genres: Genres[]
}

class App extends Component {

  state: State = {
    popular_movies: [],
    movie_genres: []
  }
  componentDidMount() {
    api.getPopularMovies().then((movieList) => {
      this.setState({popular_movies: movieList})
    })
  }
  fetchMovieDetail = (movieId: string) => {
    api.getMovieDetail(movieId)
      .then(data => this.setState({movie_genres: data}))
  }
    
  
  render() {
    console.log(this.state.movie_genres)
    return (
      <div className="App">  
        <Route exact path="/" component={Home}></Route>
        <div>
          {this.state.popular_movies.map((movie) => 
            <Route key={movie.id} exact path={`/${movie.id}`} render={() => 
            <MovieDetail genres={this.state.movie_genres}/>}></Route>
          )}
        </div>
           
      </div>
    );
  }
}

export default App;
