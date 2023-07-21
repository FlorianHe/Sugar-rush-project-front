import { User } from './user'
import { Category } from './category'
import { Paragraph } from './paragraph'

export interface Article {

  id: number
  // isMain: boolean
  title: string
  slug: string
  publicationDate: Date
  modificationDate: Date
  leads: string
  content: string
  publicationImage: string
  author: User
  category: Category
  listParagraphs: Paragraph[]
}
