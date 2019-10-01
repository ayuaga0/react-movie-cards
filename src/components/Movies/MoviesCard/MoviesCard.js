import React, {Component} from 'react'
import StarRating from './StarRating'


export default class MoviesCard extends Component {

    render() {
        return (
            <div>
            <img src={this.props.movie.imageUrl} alt={this.props.movie.id}/>
            <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.subtitle}</p>
            <p>{this.props.movie.description}</p>
            <StarRating rating={this.props.movie.rating} />
            </div>
        )
    }
}