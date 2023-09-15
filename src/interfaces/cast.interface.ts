export interface ICast {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    profile_path: string,
    cast_id: number,
    popularity: number,
    character: string,
    credit_id: string,
    order: number
}

export interface ICastObj {
    cast: ICast[]
}
