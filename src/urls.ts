const baseURL = process.env.REACT_APP_API;

const KEY = '8d41be39d2696eeff12b89d916a6c984';


const api_key = `?api_key=${KEY}`;

const movie = '/discover/movie';
const movieById = '/movie';
const genre = '/genre/movie/list';
const soon = '/movie/upcoming';
const tv = `discover/tv`;
const search = `search/movie`;

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
}

export {
    baseURL,
    api_key,
    urls,
};
