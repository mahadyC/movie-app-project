import React, { Component } from "react";
import './MovieDetail.css';
import * as api from '../api';
import { RouteComponentProps } from "react-router";

type Genres = {
    id: number;
    name: string;
}
type Movie = {
    id: string;
    title: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    genres: Genres[];
}

type State = {
    selected_movie?: Movie;
}
type Props = RouteComponentProps<{movieId: string}>;

class MovieDetail extends Component<Props> {

    state: State = { 
    }

    componentDidMount() {
        api.getMovieDetail(this.props.match.params.movieId).then((movie) => {
          this.setState({selected_movie: movie})
        })
    }

    render() {
        return (
            <div className="movie-detail-container">
                {
                    (this.state.selected_movie)
                        ?   <div className="movie-detail">
                                <h1>{this.state.selected_movie.title}</h1>
                                <div className="inlining">
                                    <div className="movie-rating">{this.state.selected_movie.vote_average} <span>/</span> <span>10</span></div>
                                    <div className="genres">{this.state.selected_movie.genres[0].name}</div>
                                    <div className="release-date">{new Date(this.state.selected_movie.release_date).getFullYear()}</div>
                                </div>                    
                                <div className="overview">{this.state.selected_movie.overview}</div>
                                <div className="images">
                                    <div className="image" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w154/${this.state.selected_movie.poster_path})`}}></div>
                                    <div className="image"style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w154/${this.state.selected_movie.poster_path})`}}></div>
                                    <div className="image" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w154/${this.state.selected_movie.poster_path})`}}></div>
                                </div>
                                
                            </div>
                        :   <div>Movie detail not available</div>
                }
                
            </div>
            
        )
    }
}

export default MovieDetail;