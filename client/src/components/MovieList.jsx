import React from 'react';

import Movie from './Movie';

class MovieList extends React.PureComponent {
    render() {
        return (
            <div className="movieList">
                {Object.values(this.props.movies).map(movie => (
                    <Movie key={movie.id} movie={movie} onMovieClick={this.props.onMovieClick} />
                ))}
            </div>
        );
    }
}

export default MovieList;
