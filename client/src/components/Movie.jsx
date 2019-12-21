import React from 'react';

class Movie extends React.PureComponent {
    handleClick = event => {
        event.preventDefault();
        this.props.onMovieClick(this.props.movie.id);
    };

    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>{this.props.movie.title}</h1>
            </div>
        );
    }
}

export default Movie;
