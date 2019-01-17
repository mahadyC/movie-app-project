import React, { Component } from "react";

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
        console.log(this.props.genres)
        return (
            <div>
              <h1>{this.props.movie.title}</h1>
              <div>{this.props.movie.vote_average}</div>
              <div>{this.props.genres.map((genre) => <div>{genre.name}</div>)}</div>
              <div>{this.props.movie.release_date}</div>
              <div>{this.props.movie.overview}</div>
              <div style={{ width: 154, height: 200, backgroundImage: `url(https://image.tmdb.org/t/p/w154/${this.props.movie.poster_path})`}}>Some Images of the </div>
            </div>
        )
    }
}

export default MovieDetail;