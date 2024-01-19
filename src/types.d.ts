export type Visibility = 'public' | 'private' | 'unlisted'

export interface DiaryEntry {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  visibility: Visibility
}

export interface DiaryEntryInput {
  title: string
  content: string
  visibility: Visibility
}
