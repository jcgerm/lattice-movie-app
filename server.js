const express = require('express');
const bodyParser = require('body-parser');

import movies from './routes/movieRoutes';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.use('/api/movies', movies);

app.listen(port, () => console.log(`Listening on port ${port}`));
