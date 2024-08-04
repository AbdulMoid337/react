import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  let [todos, settodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setnewTodo] = useState([""]);

  let addNewTask = () => {
    settodos([...todos, { task: newTodo, id: uuidv4() }]);
    setnewTodo("");
  };

  let addNewTodo = (e) => {
    setnewTodo(e.target.value);
  };

  let deleteTodo = (yes) => {
    settodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != yes));
  };

  let deleteAll = (yes) => {
    settodos([]);
  };

  let upperCase = () => {
    settodos(
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    settodos(
      todos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let toggleIsDone = (id) => {
    settodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
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
          return (
            <div>
              <br />
              <li
                key={tasks.id}
                style={{
                  textDecoration: tasks.isDone ? "line-through" : "none",
                }}
              >
                <div>{tasks.task}</div>
                <br />
              </li>
              &nbsp; &nbsp;
              <button onClick={() => deleteTodo(tasks.id)}>Delete</button>{" "}
              &nbsp; &nbsp;
              <button onClick={() => upperCaseOne(tasks.id)}>Uppercase</button>
              &nbsp; &nbsp;
              <button
                onClick={() => {
                  toggleIsDone(tasks.id);
                }}
              >
                {tasks.isDone ? "Undo" : "Complete"}
              </button>
              &nbsp; &nbsp;
            </div>
          );
        })}
      </ul>
      <br />
      <br />
      <button onClick={upperCase}>Uppercase</button>
      <br />
      <br />
      <button onClick={deleteAll}>clear</button>
    </div>
  );
}
