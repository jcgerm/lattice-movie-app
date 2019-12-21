import React from 'react';

import movieService from '../services/movieService';

const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

const dateDisplay = dateString => new Date(dateString).toDateString();

class MovieDetails extends React.PureComponent {
    getCast = movieId => {
        movieService
            .getMovieById(movieId)
            .then(res => this.setState({ movie: res }))
            .catch(err => console.log(err));
    };

    render() {
        const { movie } = this.props;

        return (
            <div className="details">
                <div className="title">
                    <h1>{movie.title}</h1>
                </div>
                <div className="poster">
                    <img src={`${POSTER_URL}${movie.poster_path}`} alt="" />
                </div>
                <div>
                    <b>Release Date:</b> {dateDisplay(movie.release_date)}
                </div>
                <div>
                    <b>Synopsis:</b> {movie.overview}
                </div>
                <div class="castTable">
                    <h2>Cast</h2>
                    <table className="castTable">
                        {movie.cast.map(actor => (
                            <tr>
                                <td className="profilePhoto">
                                    <img src={`${POSTER_URL}${actor.profile_path}`} alt="" />
                                </td>
                                <td>{actor.name}</td>
                                <td>as</td>
                                <td>{actor.character}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        );
    }
}

export default MovieDetails;
