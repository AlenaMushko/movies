import {IRes, service} from "./service";
import {api_key, urls} from "../constants/urls";
import {IGenre, IMovieObj} from "../interfaces";

export const genresService = {
    getAll: (): IRes<IGenre> => service.get(urls.genres.base + api_key),
    getById: (page: number, id: number): IRes<IMovieObj> => service.get(urls.movies.base + api_key + `&with_genres=${id}&page=${page}`),
}

