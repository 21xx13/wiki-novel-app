export type Novel = {
    id: number,
    title: string,
    poster: string,
    developers: Developer[],
    category: Category,
    genres: Genre[],
    novelshots_set: NovelShot[],
    release_date: string,
    description: string,
    video_url: string 
}

export type Genre = {
    name: string
}

export type Developer = {
    name: string
}

export type Category = {
    name: string
}

export type NovelShot = {
    image: string
}