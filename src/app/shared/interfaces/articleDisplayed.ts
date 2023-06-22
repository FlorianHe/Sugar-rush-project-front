import { Category } from './category'

export interface ArticleDisplayed {

    id: number
    title: string
    slug: string
    publication_date: Date
    publication_image: string
    categories: Category[]
}