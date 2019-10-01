import React, {Component} from 'react';
import MoviesList from './MoviesList'
import MovieService from '../../services/MovieService'

export default class Movies extends Component {
    constructor (props) {
        super(props)
        this.state = {
            movies : []
        }
    }

    componentDidMount () {
        this.setState (()=>{
            return {
                movies : MovieService.getMovies()
            }
        })
    }

    render() {
        return (
            <div>
            <MoviesList movies={this.state.movies}/>
            </div>
        )
    }
}