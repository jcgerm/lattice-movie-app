import React, { Component } from 'react';

import './App.css';
import MovieList from './components/MovieList';
import movieService from './services/movieService';
import SearchBar from './components/SearchBar';

class App extends Component {
    state = {
        movies: [],
        movie: {},
    };

    componentDidMount() {
        movieService
            .getListOfPopularMovies()
            .then(res => this.setState({ movies: res.results }))
            .catch(err => console.log(err));
    }

    doSearch = movieTitle => {
        movieService
            .searchForMovie(movieTitle)
            .then(res => this.setState({ movies: res.results }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="App">
                <SearchBar doSearch={this.doSearch} />
                <MovieList movies={this.state.movies} />
            </div>
        );
    }
}

export default App;
