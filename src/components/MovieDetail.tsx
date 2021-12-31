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
    tagline: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
    runtime: number;
    revenue: number;
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

  // ref:https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  //   function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }

  render() {
		const movie = this.state.selected_movie;
		console.log(`selected movie ${movie}`)
		console.log(this.state)
    return (
      <div className="movie-detail-container">
        {
          (movie)
          ? <div className="movie-detail" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
              {/* <div className='bg-image-overlay'> */}
                <div className='detail-container'>
                  <div className="inlining">
                      <div className="poster-image">
										  	<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
                      </div>  
                      <div className="data-container">
                        <h1>{movie.title.toUpperCase()}</h1>
                        <h2>{movie.tagline}</h2>
                        <p className="overview">{movie.overview}</p>
                        <div className="genre-list">
                        {movie.genres.map(genre => <div className="genre" key={genre.id}>{genre.name} <span></span> </div>)}  
                        </div>
                        <div className="additional-info">
                          <div className="release-date">Release:<div className="additional-info-content">{movie.release_date}</div> </div>
                          <div className="movie-runtime">Running Time:<div className="additional-info-content">{movie.runtime}</div> </div>
                          <div className="movie-revenue">Box Office:<div className="additional-info-content">
                            ${movie.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div></div>
                          <div className="movie-rating">Rating:<div className="additional-info-content">{movie.vote_average} <span>/</span> <span>10</span></div></div>
                        </div>
                      </div>
                  </div>                    
                  {/* <div className="images">
                  {(this.state.casts) ? (this.state.casts.map(cast => <div>{cast.name}</div>)) :<div></div>} 
                  </div> */}
                </div>    
              {/* </div>    */}
          	</div>
          : <div>Movie detail not available</div>
        }
          
      </div>
        
    )
  }
}

export default MovieDetail;
