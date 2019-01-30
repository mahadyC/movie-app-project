import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom';
import MovieDetail from './components/movie-detail';
import Home from './components/home';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">  
          <Route exact path="/" component={Home}></Route>
          <Route path="/movie-app-project/:movieId" component={MovieDetail}></Route>     
        </div>
      </Router>
      
    );
  }
}

export default App;
