import axios, {AxiosResponse} from "axios";

import {baseURL} from "../constants/urls";

type IRes<U> = Promise<AxiosResponse<U>>
export const service = axios.create({baseURL})

export type {
    IRes
}
