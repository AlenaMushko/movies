export interface IVideo {
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    published_at: string,
    id: string,
}

export interface IVideoObj {
    results: IVideo[]
}
