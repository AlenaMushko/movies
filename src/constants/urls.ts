const baseURL = process.env.REACT_APP_API;

const KEY = process.env.REACT_APP_API_KEY;

const api_key = `?api_key=${KEY}`;

const movie = '/discover/movie';
const movieById = '/movie';
const genre = '/genre/movie/list';
const soon = '/movie/upcoming';
const tv = `discover/tv`;
const search = `search/movie`;
const cast = '/credits';
const videos = '/videos';

const urls = {
    movies: {
        base: movie,

    },
    genres: {
        base: genre,
    },
    movieById: {
        base: movieById,
    },
    soon: {
        base: soon,
    },
    tv: {
        base: tv,
    },
    search: {
        base: search,
    },
    cast:{
        base:cast,
    },
    videos:{
        base:videos,
    },
}

export {
    baseURL,
    api_key,
    urls,
};
