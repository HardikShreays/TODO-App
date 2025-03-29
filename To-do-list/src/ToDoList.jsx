import React, { useState } from "react";
document.title = "To Do List";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }
  function handleDeleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }
  function movetaskup(index) {
    if (index > 0) {
      const newTasks = [...tasks];
      const temp = newTasks[index];
      newTasks[index] = newTasks[index - 1];
      newTasks[index - 1] = temp;
      setTasks(newTasks);
    }
  }
  function movetaskdown(index) {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      const temp = newTasks[index];
      newTasks[index] = newTasks[index + 1];
      newTasks[index + 1] = temp;
      setTasks(newTasks);
    }
  }

  return (
    <div className="todo-list">
      <h2>TO DO LIST</h2>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task..."
        />
        <button className="add-button"onClick={handleAddTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button  className= "delete-button" onClick={() => handleDeleteTask(index)}>Delete</button>
              <button className= "move-button" onClick={() => movetaskup(index)}>👆</button>
              <button className= "move-button" onClick={() => movetaskdown(index)}>👇</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
