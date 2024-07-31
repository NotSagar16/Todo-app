import React from 'react'
import { useState } from 'react'
const App = () => {
  const [todo, setTodo] = useState([])
  const [input, setinput] = useState("")
  const addTodo=()=>{
    const newTodo={
      text:input
    }
    setTodo([...todo, newTodo]);
    setinput("");
    
  }
  const deleteTodo=(id)=>{
    setTodo(todo.filter((todo) => todo.id !== id));
  }
  return (
    <div>
      <h1>Todo list</h1>
        <input
          type="text"
          onChange={(e) => setinput(e.target.value)}
          value={input}
        />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todo.map((x) => (
            <li key={x.id}>
              {x.text} <button onClick={() => deleteTodo(x.id)}>Done</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default App