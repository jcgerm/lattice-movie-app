import React from 'react';

class Movie extends React.PureComponent {
    render() {
        const { movie } = this.props;

        return (
            <div>
                <h1>{movie.title}</h1>
            </div>
        );
    }
}

export default Movie;
