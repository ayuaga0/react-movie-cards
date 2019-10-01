import React, {Component} from 'react';
import MoviesCard from './MoviesCard/MoviesCard'

export default class MoviesList extends Component {
    render() {
        return (
            <div>
            {this.props.movies.map ((movie)=>{
                return <MoviesCard key={movie.id} movie={movie} />
            })}
            
            </div>
        )
    }
}