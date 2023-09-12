import {IRes, service} from "./service";
import {api_key, urls} from "../constants/urls";
import { IMovieById, IMovieObj} from "../interfaces";

export const moviesService = {
    // getAll: (page:number):IRes<IMovie[]> => service.get(urls.movies.base + api_key + `&page=${page}`),
    getAll: ():IRes<IMovieObj> => service.get(urls.movies.base + api_key),
    getById: (id:number):IRes<IMovieById>=> service.get(urls.movieById.base+ `/${id}` + api_key),
    getSoon: (page:number):IRes<IMovieObj[]> => service.get(urls.soon.base + api_key + `&page=${page}`),
    getTv: (page:number):IRes<IMovieObj[]>=>service.get(urls.tv.base+ api_key + `&page=${page}`),
    getAnimation: (page:number):IRes<IMovieObj[]> => service.get(urls.movies.base + api_key + `&page=${page}`+'&with_genres=16'),
    getSearch: (page:number, searchQuery:string) :IRes<IMovieObj[]>=> service.get(urls.search.base + api_key + `&query=${searchQuery}&page=${page}`),
}
