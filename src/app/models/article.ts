import { Category } from "./category"
import { User } from "./user"

export interface Article {

    id: number
    title: string
    publication_date: Date
    modification_date: Date
    lead: string
    content: string
    publication_image: string
    author: User
    categories: Category[]
}