import React, { Component } from "react";
import './MovieDetail.css';
import * as api from '../api';
import { RouteComponentProps } from "react-router";

type Genres = {
    id: number;
    name: string;
}

type Casts = {
    name: string;
    prpfile_path: string;
}

type Movie = {
    id: string;
    title: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    genres: Genres[];
    backdrop_path: string;
    casts: Casts[];
}

type State = {
    selected_movie?: Movie;
    casts?: Casts[];
}
type Props = RouteComponentProps<{movieId: string}>;

class MovieDetail extends Component<Props, State> {

    state: State = { 
    }

    componentDidMount() {
        api.getMovieDetail(this.props.match.params.movieId).then((movie) => {
          this.setState({selected_movie: movie})
        })
        api.getMovieCasts(this.props.match.params.movieId).then((casts) => {
            this.setState({casts: casts})
        })
    }

    render() {
        console.log(this.state.casts)
        return (
            <div className="movie-detail-container">
                {
                    (this.state.selected_movie)
                        ?   <div className="movie-detail" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780/${this.state.selected_movie.backdrop_path})`}}>
                                <div className='bg-image-overlay'>
                                    <div className='detail-container'>
                                        <h1>{this.state.selected_movie.title}</h1>
                                        <div className="inlining">
                                            <div className="movie-rating">{this.state.selected_movie.vote_average} <span>/</span> <span>10</span></div>
                                            <div className="genres">{this.state.selected_movie.genres[0].name} <span>.</span> </div>
                                            <div className="release-date">{new Date(this.state.selected_movie.release_date).getFullYear()}</div>
                                        </div>                    
                                        <div className="overview">{this.state.selected_movie.overview}</div>
                                        <div className="images">
                                        {(this.state.casts) ? <div>{this.state.casts[0].name}</div> :<div></div>} 
                                        
                                        </div>
                                    </div>    
                                </div>   
                            </div>
                        :   <div>Movie detail not available</div>
                }
                
            </div>
            
        )
    }
}

export default MovieDetail;