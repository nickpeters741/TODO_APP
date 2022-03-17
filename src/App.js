import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['wakeup early in the morning for a morning run to marurui and back','Read atleast one chapter of code discovery']);

  return (
    <div className="App">
      <h1>Hello, nick peters wanjau 🙋 </h1>
      <input />
      <button>Add Todo</button>

      <ul>
        {todos.map(todo =>(<li>{todo}</li>))} 
        <li></li>
        <li></li>

      </ul>
    </div>
  );
}

export default App;
