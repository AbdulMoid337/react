import { useState } from "react";

export default function ToDoList() {
  let [todos, settodos] = useState(["sample task"]);
  let [newTodo, setnewTodo] = useState([""]);

  let addNewTask = () => {
    settodos([...todos, newTodo]);
    setnewTodo("");
  };

  let addNewTodo = (e) => {
    setnewTodo(e.target.value);
  };
  return (
    <div>
      <h2>todolist</h2>
      <input
        type="text"
        placeholder="enter text"
        value={newTodo}
        onChange={addNewTodo}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Click Here</button>

      <br />
      <br />
      <hr />
      <h3>List</h3>
      <ul>
        {todos.map((tasks) => {
          return <li>{tasks}</li>;
        })}
      </ul>
    </div>
  );
}
