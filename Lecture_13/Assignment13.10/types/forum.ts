export interface User {
  id: number
  username: string
  full_name: string
  email: string
  pw_hash: string
}

export interface Comment {
  id: number
  post_id: number
  username: string
  content: string
  date: Date
}
export interface Post {
  id: number
  username: string
  title: string
  content: string
  date: Date
  comments: Comment[]
}
