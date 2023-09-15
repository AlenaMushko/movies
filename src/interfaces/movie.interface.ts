import {IGenresObj} from "./genre.interface";

export interface IFilm {
    adult: boolean;
    backdrop_path: string;
    genre_ids?: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number
}

export interface IMovieObj {
    results: IFilm[],
    page: number
    total_pages: number
}

interface IProductionCompanies {
    id: number,
    name: string,
    logo_path: string
}

export interface IMovieById extends IFilm {
    budget: number,
    genres: IGenresObj[],
    homepage: string,
    production_companies: IProductionCompanies[],
    tagline: string,
}
