import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {

    return <ul className="list">
        {todos.length === 0 && "No to does"}
        {todos.map(todos => {
            return <TodoItem {...todos} key={todos.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        })}
    </ul>
}