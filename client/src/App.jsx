import React, { Component } from 'react';

import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import movieService from './services/movieService';
import SearchBar from './components/SearchBar';

class App extends Component {
    state = {
        movies: null,
    };

    // Load the list of popular movies when the page is loaded
    componentDidMount() {
        this.showPopularMovies();
    }

    showPopularMovies = () => {
        movieService
            .getListOfPopularMovies()
            .then(res => this.setState({ movies: res }))
            .catch(err => console.log(err));
    };

    doSearch = movieTitle => {
        movieService
            .searchForMovie(movieTitle)
            .then(res => this.setState({ movies: res }))
            .catch(err => console.log(err));
    };

    showMovieDetails = movieId => {
        movieService
            .getMovieById(movieId)
            .then(res => this.setState({ movies: [res] }))
            .catch(err => console.log(err));
    };

    render() {
        let movies = this.state.movies;
        let contents;

        if (movies) {
            if (movies.length === 1) {
                contents = <MovieDetails movie={this.state.movies[0]} />;
            } else {
                contents = (
                    <MovieList movies={this.state.movies} onMovieClick={this.showMovieDetails} />
                );
            }
        }
        return (
            <div className="App">
                <SearchBar doSearch={this.doSearch} showPopularMovies={this.showPopularMovies} />
                {contents}
            </div>
        );
    }
}

export default App;
