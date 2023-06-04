interface Note {
  [id: number]: {
    name: string
    content: string
  }
}
export let notes: Note = {}
