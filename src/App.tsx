import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom';
import MovieDetail from './components/movie-detail';
import Home from './components/home';

class App extends Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">  
          <Route exact path="/" component={Home}></Route>
          <Route path="/:movieId" component={MovieDetail}></Route>     
        </div>
      </Router>
      
    );
  }
}

export default App;
