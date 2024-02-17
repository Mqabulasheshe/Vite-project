import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [...todos, { id: crypto.randomUUID(), title, completed: false },
      ]
    }
    )
  }
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todos => {
        if (todos.id == id) {
          return { ...todos, completed }
        }
        return todos
      })
    })

  }
  function deleteTodo(id) {
    setTodos(currentTodos => { return currentTodos.filter(todos => todos.id !== id) })
  }
  return <>
    <NewTodoForm onSubmit={addTodo} />
    <h1>Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </>
}