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

        let poster = movie.poster_path ? (
            <img src={`${POSTER_URL}${movie.poster_path}`} alt={movie.title} />
        ) : (
            ''
        );

        return (
            <div className="details">
                <div className="title">
                    <h1>{movie.title}</h1>
                </div>
                <div className="poster">{poster}</div>
                <div>
                    <b>Runtime:</b> {movie.runtime} minutes
                </div>
                <div>
                    <b>Genre:</b> {movie.genres.map(genre => genre.name).join(', ')}
                </div>
                <div>
                    <b>Release Date:</b> {dateDisplay(movie.release_date)}
                </div>
                <div>
                    <b>Synopsis:</b> {movie.overview}
                </div>
                <div className="castTable">
                    <h2>Cast</h2>
                    <table className="castTable">
                        <tbody>
                            {movie.cast.map(actor => (
                                <tr key={actor.cast_id}>
                                    <td className="profilePhoto">
                                        {actor.profile_path !== null ? (
                                            <img
                                                src={`${POSTER_URL}${actor.profile_path}`}
                                                alt={actor.name}
                                            />
                                        ) : (
                                            <div></div>
                                        )}
                                    </td>
                                    <td>{actor.name}</td>
                                    <td>as</td>
                                    <td>{actor.character}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default MovieDetails;
