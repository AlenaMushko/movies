import axios, {AxiosResponse} from "axios";

import {baseURL} from "../constants/urls";

type IRes<U> = Promise<AxiosResponse<U>>
export const service = axios.create({baseURL});
service.interceptors.request.use(req => {
    const accessToken = sessionStorage.getItem('userName')

    if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
    }
    return req;
})

export type {
    IRes
}
