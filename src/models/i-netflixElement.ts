export default interface INetflixElement {
    id: number,
    genre_ids: number[],
    title?: string,
    name?: string,
    overview: string,
    poster_path: string,
    vote_count: number,
    media_type: string,
    backdrop_path: string
}