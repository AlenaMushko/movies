const baseURL = process.env.REACT_APP_API;

const KEY = process.env.REACT_APP_API_KEY;

const api_key = `?api_key=${KEY}`;

const movie = '/discover/movie';
const movieById = '/movie';
const genre = '/genre/movie/list';
const soon = '/movie/upcoming';
const search = `search/movie`;
const cast = '/credits';
const videos = '/videos';

const urls = {
    movies: {
        base: movie,
    },
    movieById: {
        base: movieById,
    },
    genres: {
        base: genre,
    },
    soon: {
        base: soon,
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
