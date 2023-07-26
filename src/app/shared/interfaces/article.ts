import { Category } from './category'
import { Paragraph } from './paragraph'
import { User } from './user'

export interface Article {

  id: number
  isMain: boolean
  title: string
  slug: string
  publicationDate: Date
  modificationDate: Date
  leads: string
  publicationImage: string
  author: User
  category: Category
  listParagraphs?: Paragraph[]
}
