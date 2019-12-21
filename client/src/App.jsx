import React, { Component } from 'react';

import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import movieService from './services/movieService';
import SearchBar from './components/SearchBar';

class App extends Component {
    state = {
        movies: [],
        movie: null,
    };

    // Load the list of popular movies when the page is loaded
    componentDidMount() {
        movieService
            .getListOfPopularMovies()
            .then(res => this.setState({ movies: res }))
            .catch(err => console.log(err));
    }

    doSearch = movieTitle => {
        this.setState({ movie: null });

        movieService
            .searchForMovie(movieTitle)
            .then(res => this.setState({ movies: res }))
            .catch(err => console.log(err));
    };

    showMovieDetails = movieId => {
        movieService
            .getMovieById(movieId)
            .then(res => this.setState({ movie: res }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="App">
                <SearchBar doSearch={this.doSearch} />
                {this.state.movie === null ? (
                    <MovieList movies={this.state.movies} onMovieClick={this.showMovieDetails} />
                ) : (
                    <MovieDetails movie={this.state.movie} />
                )}
            </div>
        );
    }
}

export default App;
