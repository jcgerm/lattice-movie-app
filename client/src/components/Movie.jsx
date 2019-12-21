import React from 'react';

const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

class Movie extends React.PureComponent {
    render() {
        const { movie } = this.props;

        return (
            <div>
                <h1>{movie.title}</h1>
                <div>
                    <img src={`${POSTER_URL}${movie.poster_path}`} alt="" />
                </div>
            </div>
        );
    }
}

export default Movie;
