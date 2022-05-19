import { Novel } from "./Novel"

export type NovelComment = {
    id: number,
    novel: number,
    email: string,
    text: string,
    name: string
}