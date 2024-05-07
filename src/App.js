import "./index.css";
import {NewToDoForm} from "./components/NewToDoForm.jsx"
import { ToDoList } from "./components/ToDoList.jsx";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState(() => {
    let localValue = localStorage.getItem('ITEMS')
    if(localValue === null){
      return []
    }
    else {
      return JSON.parse(localValue)
    }
  })
  function handleSubmit(event){
    event.preventDefault()
    setTodos([...todos,{id:crypto.randomUUID(),title:newItem,complited:false}])
    setNewItem("")
  }
  function toggleTodo(id, completed){
    setTodos((currentTodos) => {

      return(
        currentTodos.map((todo) => (
          todo.id == id ? {...todo,completed} : todo
        ))
      )

    })
  }
  function deleteTodo(id){
    setTodos((currentTodos) => {
      currentTodos.filter((todo) => (todo.id !== id))
    })
  }
  useEffect(() => {localStorage.setItem('ITEMS', JSON.stringify(todos))},[todos])
  console.log(todos)
  return (
    <div>
    <NewToDoForm newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
    <h1 className="header">Todo List</h1>
    <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
