export interface Comment {
  id: number
  post_id: number
  username: string
  content: string
  comment_date: Date
}

export interface Post {
  id: number
  username: string
  title: string
  content: string
  post_date: Date
  comments: Comment[]
}
