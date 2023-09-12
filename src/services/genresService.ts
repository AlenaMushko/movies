import {IRes, service} from "./service";
import {api_key, urls} from "../constants/urls";
import {IGenre} from "../interfaces";

export const genresService = {
    getAll: ():IRes<IGenre> => service.get(urls.genres.base + api_key),
}
