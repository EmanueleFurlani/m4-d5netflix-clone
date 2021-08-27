import React from 'react'
import { Component } from 'react'




class Movie extends Component {
	state = {
		Poster: this.props.movie.Poster,
		Title: this.props.movie.Title,
		Type: this.props.movie.Type,
		Year: this.props.movie.Year,
		imdbID: this.props.imdbID
	}
	
	render() {
		return (
			<div className="col-md-2 col-lg-2 movie-container mx-0 px-1">
				<img src={this.state.Poster} className="img-fluid carousel-img" alt="Movie Here"/>
				
			</div>
		)
	}
}

export default Movie