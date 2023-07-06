import { User } from './user'
import { Category } from './category'
import { Comment } from './comment'

export interface Article {

    id: number
    isMain: boolean
    title: string
    slug: string
    publication_date: Date
    modification_date : Date
    lead: string
    content: string
    publication_image: string
    author: User
    categories: Category[]
    comments: Comment[];
}