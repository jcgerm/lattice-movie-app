import React from 'react';

import Movie from './Movie';

class MovieList extends React.PureComponent {
    render() {
        let movies = this.props.movies;
        let list = 'No movies found.';

        if (movies.length > 0) {
            list = Object.values(this.props.movies).map(movie => (
                <Movie key={movie.id} movie={movie} onMovieClick={this.props.onMovieClick} />
            ));
        }
        return <div className="movieList">{list}</div>;
    }
}

export default MovieList;
