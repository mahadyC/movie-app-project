import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import MovieDetail from './components/movie-detail';
import Home from './components/home';

class App extends Component {

  render() {
    return (
      <div className="App">  
        <Route exact path="/" component={Home}></Route>
        <Route path="/:movieId" component={MovieDetail}></Route>     
      </div>
    );
  }
}

export default App;
