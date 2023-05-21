import axios from 'axios'

interface Todo {
  userId: number
  user: object
}
interface User {
  id: number
  name: string
  username: string
  email: string
}

async function getTodos() {
  const apicall = 'https://jsonplaceholder.typicode.com/todos/'
  const response = await axios.get(apicall)
  return response.data
}

async function getUsers() {
  const apicall = 'https://jsonplaceholder.typicode.com/users/'
  const response = await axios.get(apicall)

  return response.data
}

interface Data {
  todos: Todo[]
  users: User[]
}

async function dataBase() {
  const data: Data = {
    todos: await getTodos(),
    users: await getUsers()
  }

  const combineData = data.todos.map((todo) => {
    const user = data.users.find((user) => user.id === todo.userId)
    if (user) {
      const parsedUser = {
        name: user.name,
        username: user.username,
        email: user.email
      }
      todo.user = parsedUser
    }
    return todo
  })
  console.log(combineData)
}
dataBase()

// Also tried deleting items
// using optional properties and the delete keyword.
// interface Todo { userId?: }
// delete todo.userId
