import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './api';
class App extends Component {

  state = {
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
        <ul>
          {this.state.popular_movies.map((movie:any) =>          
            <li key={movie.id}>{movie.title}</li>                  
          )}  
        </ul>    
      </div>
    );
  }
}

export default App;
