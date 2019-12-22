import React from 'react';

class Movie extends React.PureComponent {
    handleClick = event => {
        this.props.onMovieClick(this.props.movie.id);
    };

    render() {
        return (
            <div>
                <h1 className="movie" onClick={this.handleClick}>
                    {this.props.movie.title}
                </h1>
            </div>
        );
    }
}

export default Movie;
