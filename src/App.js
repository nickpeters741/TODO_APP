import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Wakeup early in the morning for a morning run to marurui and back','Read atleast one chapter of code discovery','Practice to code in react']);
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <h1>Hello, nick peters wanjau 🙋 </h1>
      <input value={input}/>
      <button>Add Todo</button>

      <ul>
        {todos.map(todo =>(<li>{todo}</li>))} 
      </ul>
    </div>
  );
}

export default App;
