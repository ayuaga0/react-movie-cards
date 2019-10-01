import movies from './movies.json'

export default class MoviesService {
   static getMovies () {
        return movies ? movies : []
    }
}