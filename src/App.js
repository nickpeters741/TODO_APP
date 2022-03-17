import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>Hello, nick peters wanjau 🙋 </h1>
      <input />
      <button>Add Todo</button>

      <ul>
        <li>wakeup early in the morning for a morning run to marurui and back</li>
        <li>Read atleast one chapter of code discovery</li>

      </ul>
    </div>
  );
}

export default App;
