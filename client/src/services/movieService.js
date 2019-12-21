import axios from 'axios';

export default {
    getListOfPopularMovies: async () => {
        let response = await axios.get('/api/movies/popular');
        let data = await response.data;

        return data;
    }
}