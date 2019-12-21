import express from 'express';
import axios from 'axios';

const MOVIE_DB_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'dfe318abee989b9d18f2421d7f8bbb19';

const router = express.Router();

router.get('/popular', (req, res) => {
    axios.get(`${MOVIE_DB_URL}/movie/popular?api_key=${API_KEY}`).then(movieRes => {
        res.send(
            movieRes.data.results.map(movie => {
                return {
                    id: movie.id,
                    title: movie.original_title,
                };
            }),
        );
    });
});

router.get('/search', (req, res) => {
    let { movieTitle } = req.query;

    axios
        .get(`${MOVIE_DB_URL}/search/movie?query=${movieTitle}&api_key=${API_KEY}`)
        .then(movieRes => {
            res.send(movieRes.data);
        });
});

router.get('/movie', (req, res) => {
    let { movieId } = req.query;

    axios
        .all([
            axios.get(`${MOVIE_DB_URL}/movie/${movieId}?api_key=${API_KEY}`),
            axios.get(`${MOVIE_DB_URL}/movie/${movieId}/credits?api_key=${API_KEY}`),
        ])
        .then(
            axios.spread((...responses) => {
                let movie = responses[0].data;
                let cast = responses[1].data;

                res.send({
                    id: movie.id,
                    title: movie.original_title,
                    overview: movie.overview,
                    release_date: movie.release_date,
                    poster_path: movie.poster_path,
                    cast: cast.cast.map(actor => {
                        return {
                            cast_id: actor.cast_id,
                            character: actor.character,
                            name: actor.name,
                            profile_path: actor.profile_path,
                        };
                    }),
                });
            }),
        );
});
export default router;
