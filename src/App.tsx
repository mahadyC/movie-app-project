import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './api';
import { url } from 'inspector';

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

const containerStyle = {
  display: 'grid',
  justifyContent: 'space-evenly',
  gridTemplateColumns: 'auto auto auto auto ',
  gridGap: 10,
  backgroundColor: '#113049',
  padding: 10,
  overflow: 'hidden'
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
        <div className='grid-container' style={containerStyle}>
          {this.state.popular_movies.map((movie) =>          
            <div key={movie.id} className='grid-item' style={{textAlign: "center", padding: 30, fontSize: 30, position: "relative"}}>
              <div className='movie-card-top' style={{width: 342, height: 500, backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie.poster_path})`, borderRadius: 5}}></div>
              <div className='movie-release-date' style={{textAlign: "left", color: "#5A5F61", fontSize: 16, paddingTop: 20}}>{movie.release_date}</div>
              <div className='movie-title' style={{textAlign: "left", color: "#AFBABA", fontSize: 20}}>{movie.title}</div>             
            </div>                  
          )}  
        </div>    
      </div>
    );
  }
}

export default App;
