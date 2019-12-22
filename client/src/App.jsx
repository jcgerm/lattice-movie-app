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

    // Gets the list of popular movie titles and ids
    showPopularMovies = () => {
        movieService.getListOfPopularMovies().then(res => this.setState({ movies: res }));
    };

    // Searches for a movie. Callback for the search box
    doSearch = movieTitle => {
        movieService
            .searchForMovie(movieTitle)
            .then(res => {
                if (res.length === 1) {
                    this.showMovieDetails(res[0].id);
                } else {
                    return res;
                }
            })
            .then(res => {
                this.setState({ movies: res });
            });
    };

    // Gets movie details for the details page
    showMovieDetails = movieId => {
        movieService.getMovieById(movieId).then(res => this.setState({ movies: [res] }));
    };

    render() {
        let movies = this.state.movies;
        let contents;

        if (movies) {
            // If we have only one movie in the list, let's show the details page
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
