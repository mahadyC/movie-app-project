import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './api';
class App extends Component {

  componentDidMount() {
    api.getPopularMovies().then((movieList) => {
      console.log(movieList);
    })
  }
  render() {
    return (
      <div className="App">       
      </div>
    );
  }
}

export default App;
