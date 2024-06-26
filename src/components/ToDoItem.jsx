export const ToDoItem = ({todos,toggleTodo, deleteTodo}) => (
<div>
{todos.map((todo) =>
    (
        <li key={todo.id}>
        <label>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
            />
            {todo.title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo?.id)}>
            Delete
        </button>
        </li>
    )
)}
</div>
)