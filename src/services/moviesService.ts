import {IRes, service} from "./service";
import {api_key, urls} from "../urls";
import {IMovie} from "../interfaces";

export const moviesService = {
    getAll: (page:number):IRes<IMovie[]> => service.get(urls.movies.base + api_key + `&page=${page}`),
    getById: (id:number):IRes<IMovie>=> service.get(urls.movieById.base+ `/${id}` + api_key),
    getSoon: (page:number):IRes<IMovie[]> => service.get(urls.soon.base + api_key + `&page=${page}`),
    getTv: (page:number):IRes<IMovie[]>=>service.get(urls.tv.base+ api_key + `&page=${page}`),
    getAnimation: (page:number):IRes<IMovie[]> => service.get(urls.movies.base + api_key + `&page=${page}`+'&with_genres=16'),
    getSearch: (page:number, searchQuery:string) :IRes<IMovie[]>=> service.get(urls.search.base + api_key + `&query=${searchQuery}&page=${page}`),
}
