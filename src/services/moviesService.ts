import {IRes, service} from "./service";
import {api_key, urls} from "../constants/urls";
import {IFilm, IMovieById, IMovieObj, IPagination} from "../interfaces";

export const moviesService = {
    getAll: (page: number): IRes<IPagination<IFilm>> => service.get(urls.movies.base + api_key + `&page=${page}`),
    getById: (id: number): IRes<IMovieById> => service.get(urls.movieById.base + `/${id}` + api_key),
    getSoon: (page: number): IRes<IPagination<IFilm>> => service.get(urls.soon.base + api_key + `&page=${page}`),
    getAnimation: (page: number): IRes<IPagination<IFilm>> => service.get(urls.movies.base + api_key + `&page=${page}` + '&with_genres=16'),
    getSearch: (page: number, searchQuery: string): IRes<IMovieObj> => service.get(urls.search.base + api_key + `&query=${searchQuery}&page=${page}`),
}
