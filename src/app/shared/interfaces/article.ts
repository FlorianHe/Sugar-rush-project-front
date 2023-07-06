import { User } from './user'
import { Category } from './category'

export interface Article {

  id: number
  // isMain: boolean
  title: string
  slug: string
  publicationDate: Date
  modificationDate: Date
  lead: string
  content: string
  publicationImage: string
  author: User
  category: Category
}
