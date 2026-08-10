import React, { useEffect, useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    setTasks([...tasks, input]);
  };

  const handleDeleteTodo = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks.length !== 0) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h2>My Todo App</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleAddTodo}> Add Todo</button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}{" "}
              <button
                className="delete-btn"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
