import React, { Component } from 'react';
import './App.css';
import * as api from './api';
import './movie.css';

type Movie = {
  id: string;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

type State = {
  popular_movies: Movie[]
}

class App extends Component {

  state: State = {
    popular_movies: []
  }
  componentDidMount() {
    api.getPopularMovies().then((movieList) => {
      console.log(movieList);
      this.setState({popular_movies: movieList})
    })
  }
  render() {
    console.log(this.state.popular_movies)
    return (
      <div className="App">  
        <div className='grid-container'>
          {this.state.popular_movies.map((movie) =>          
            <div key={movie.id} className='grid-item'>
              <div className='movie-card-top' style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie.poster_path})`}}></div>
              <div className='movie-release-date'>{movie.release_date}</div>
              <div className='movie-title'>{movie.title}</div>             
            </div>                  
          )}  
        </div>    
      </div>
    );
  }
}

export default App;
