import React, { Component } from 'react';
import './App.css';
import * as api from './api';
import './movie.css';
import { Route, Link } from 'react-router-dom';
import MovieDetail from './components/movie-detail';
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
        <Route exact path="/" render={() => 
          <div className='grid-container'>
            {this.state.popular_movies.map((movie) =>          
              <div key={movie.id} className='grid-item'>
                <Link to={`/${movie.id}`} onClick={() => this.fetchMovieDetail(movie.id)}>
                  <div className='movie-card-top' style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie.poster_path})`}}></div>
                </Link> 
                <div className='movie-release-date'>{movie.release_date}</div>
                <div className='movie-title'>{movie.title}</div>             
              </div>                  
            )}  
          </div> 
        }></Route>
        <div>
          {this.state.popular_movies.map((movie) => 
            <Route key={movie.id} exact path={`/${movie.id}`} render={() => 
            <MovieDetail movie={movie} genres={this.state.movie_genres}/>}></Route>
          )}
        </div>
           
      </div>
    );
  }
}

export default App;
