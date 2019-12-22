import axios from 'axios';

// Client API for the 3 server tasks
// 1. Get the popular movie list.
// 2. Search for a movie by title.
// 3. Get a movie by id.

export default {
    getListOfPopularMovies: async () => {
        let response = await axios.get('/api/movies/popular');
        let data = await response.data;

        return data;
    },

    searchForMovie: async movieTitle => {
        let response = await axios.get(`/api/movies/search?movieTitle=${movieTitle}`);
        let data = await response.data;

        return data;
    },

    getMovieById: async movieId => {
        let response = await axios.get(`/api/movies/movie?movieId=${movieId}`);
        let data = await response.data;

        return data;
    },
};
