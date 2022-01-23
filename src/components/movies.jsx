import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService'
import {deleteMovie} from '../services/fakeMovieService'

class Movies extends Component {
    state = {
        movies: getMovies()
    } 

    handeDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies})
    }
    
    render() { 

        if(this.state.movies.length === 0) return <p><strong>There are no movies in data.</strong></p>
        return( 

        <React.Fragment>
    <p><strong>Showing {this.state.movies.length} movies in the data.</strong></p>  
        
        
        <table className = "table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
            </thead>
           <tbody>
                {this.state.movies.map(movies => 
                    <tr key = {movies._id}>
                        <td>{movies.title}</td>
                        <td>{movies.genre.name}</td>
                        <td>{movies.numberInStock}</td>
                        <td>{movies.dailyRentalRate}</td>
                        <td><button onClick ={() => this.handeDelete(movies)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>)}  
            </tbody>  
        </table>
        </React.Fragment>
        )}
}
        
export default Movies;