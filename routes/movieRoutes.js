import express from 'express';
import axios from 'axios';

const MOVIE_DB_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'dfe318abee989b9d18f2421d7f8bbb19';

const router = express.Router();

router.get('/popular', (req, res) => {
    axios.get(`${MOVIE_DB_URL}/movie/popular?api_key=${API_KEY}`).then(movieRes => {
        res.send(movieRes.data);
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

export default router;
