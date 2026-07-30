import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    setTasks([...tasks, input]);
  };

  return (
    <div>
      <h2>My Todo App</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        
        <ul style={{backgroundColor : 'red'}}>
          {tasks.map((task, index) => <li key={index}>{task}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
