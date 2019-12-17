import React, { Component } from 'react';

import './App.css';
import MovieList from './components/MovieList';
import movieService from './services/movieService';

class App extends Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        movieService
            .getListOfPopularMovies()
            .then(res => this.setState({ movies: res.results }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App">
                <MovieList movies={this.state.movies} />
            </div>
        );
    }
}

export default App;
