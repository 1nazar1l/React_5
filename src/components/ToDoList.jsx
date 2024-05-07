import { ToDoItem } from "./ToDoItem";
export const ToDoList = ({todos, toggleTodo, deleteTodo}) => (
<ul className="list">
    <ToDoItem todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
</ul>
)
