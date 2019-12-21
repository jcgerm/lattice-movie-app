import React from 'react';

import Movie from './Movie';

class MovieList extends React.PureComponent {
    render() {
        return (
            <div>
                {Object.values(this.props.movies).map(movie => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>
        );
    }
}

export default MovieList;
