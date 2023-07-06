import { Category } from './category'

export interface ArticleDisplayed {

  id: number
  // isMain: boolean
  title: string
  slug: string
  publicationDate: Date
  publicationImage: string
  category: Category
}
