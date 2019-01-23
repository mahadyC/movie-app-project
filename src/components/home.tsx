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
            <div className='grid-container'>
                {this.state.popular_movies.map((movie) =>          
                    <div key={movie.id} className='grid-item'>
                        <Link to={`/${movie.id}`}>
                        <div className='movie-card-top' style={{width: 185, height: 278, backgroundImage: `url(https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path})`}}></div>
                        </Link> 
                        <div className='movie-release-date'>{movie.release_date}</div>
                        <div className='movie-title'>{movie.title}</div>             
                    </div> 
                )}
            </div>
        )
    }
}

export default Home;