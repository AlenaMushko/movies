import {IRes, service} from "./service";
import {api_key, urls} from "../constants/urls";
import { ICastObj} from "../interfaces";

export const castService = {
    getCastsByMovie: (id:number):IRes<ICastObj>=> service.get(urls.movieById.base+ `/${id}` + urls.cast.base + api_key),
}

