import {IRes, service} from "./service";
import {api_key, urls} from "../constants/urls";
import {IVideoObj} from "../interfaces";


export const videoService = {
    getVideoByMovie: (id:number):IRes<IVideoObj>=> service.get(urls.movieById.base+ `/${id}` + urls.videos.base + api_key),
}


