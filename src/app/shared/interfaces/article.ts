import { Category } from './category'
import { User } from './user'

export interface Article {

  id: number
  isMain: boolean
  title: string
  slug: string
  publicationDate: Date
  modificationDate: Date
  leads: string
  content: string
  publicationImage: string
  author: User
  category: Category
}
