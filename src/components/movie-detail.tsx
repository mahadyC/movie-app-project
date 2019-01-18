import React, { Component } from "react";
import '../movie.css';
import * as api from '../api';
type Props = {
  genres: Genres[]
}
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

class MovieDetail extends Component<Props> {

    state: State = { 
    }

    componentDidMount() {
        api.getMovieDetail("297802").then((movie) => {
          this.setState({selected_movie: movie})
        })
    }

    render() {
        console.log((this.state.selected_movie) ? this.state.selected_movie.genres : "")
        let releaseDate = new Date((this.state.selected_movie) ? this.state.selected_movie.release_date:"").getFullYear();
        return (
            <div className="movie-detail-container">
                {
                    (this.state.selected_movie)
                        ?   <div className="movie-detail">
                                <h1>{this.state.selected_movie.title}</h1>
                                <div className="inlining">
                                    <div className="rating">{this.state.selected_movie.vote_average}/<span>10</span></div>
                                    <div className="genres">{this.state.selected_movie.genres.map((genre) => <div key={genre.id} className="genre">{genre.name}</div>)}</div>
                                    <div className="release-date">{releaseDate}</div>
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