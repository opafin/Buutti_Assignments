interface Book {
  [id: number]: {
    name: string
    author: string
    read: boolean
  }
}
export let books: Book = {}
