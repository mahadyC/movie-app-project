import React, { Component } from 'react';
import * as api from '../api';
import './home.css';
import { Link } from 'react-router-dom';

type Movie = {
    id: string;
    title: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
    overview: string;
}

type State = {
    popular_movies: Movie[];
}

class Home extends Component {
    state: State = {
        popular_movies: []    
    }

    componentDidMount() {
        api.getPopularMovies().then((movieList) => {
          this.setState({popular_movies: movieList})
        })
    }

    render() {
        return(
            <div className='page-container'>
                <h1>Popular Movies</h1>
                <hr></hr>
                <div className='grid-container'>
                    {this.state.popular_movies.map((movie) =>          
                        <div key={movie.id} className='grid-item'>
                            <Link to={`/${movie.id}`}>
                            <img className='movie-card-top' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='Poster of the movie'/>
                            </Link> 
                            <div className='movie-release-date'>{new Date(movie.release_date).getFullYear()}</div>
                            <div className='movie-title'>{movie.title}</div>             
                        </div> 
                    )}
                </div>
            </div>
            
        )
    }
}

export default Home;