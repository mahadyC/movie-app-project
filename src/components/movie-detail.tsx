import React, { Component } from "react";
import '../movie.css';
type Props = {
  movie: {
    id: string;
    title: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
    overview: string;
  },
  genres: Genres[]
}
type Genres = {
    id: number;
    name: string;
  }

class MovieDetail extends Component<Props> {
    render() {
        let releaseDate = new Date(this.props.movie.release_date).getFullYear();
        return (
            <div className="movie-detail-container">
                <div className="movie-detail">
                    <h1>{this.props.movie.title}</h1>
                    <div className="inlining">
                        <div className="rating">{this.props.movie.vote_average}/<span>10</span></div>
                        <div className="genres">{this.props.genres.map((genre) => <div key={genre.id} className="genre">{genre.name}</div>)}</div>
                        <div className="release-date">{releaseDate}</div>
                    </div>                    
                    <div className="overview">{this.props.movie.overview}</div>
                    <div className="images">
                        <div className="image" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w154/${this.props.movie.poster_path})`}}></div>
                        <div className="image"style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w154/${this.props.movie.poster_path})`}}></div>
                        <div className="image" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w154/${this.props.movie.poster_path})`}}></div>
                    </div>
                    
                </div>
            </div>
            
        )
    }
}

export default MovieDetail;