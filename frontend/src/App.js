import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

function App() {
  const Todos = ({ todos }) => {
    return (
      <div className="todos">
        {todos.map((todo) => {
          return (
            <div className="todo">
              <input type="checkbox" 
              className="checkbox"
              ></input>
              <p>{todo.name}</p>
              <button onClick={() => handleWithEditButtonClick(todo)}>
                <AiOutlineEdit size={20} color={"#64697b"}></AiOutlineEdit>
              </button>
              <button onClick={() => deleteTodo(todo)}>
                <AiOutlineDelete size={20} color={"#64697b"}></AiOutlineDelete>
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  async function handleWithNewButton() {
    setInputVisility(!inputVisbility);
  }
  async function handleWithEditButtonClick(todo) {
    setSelectedTodo(todo);
    setInputVisility(true);
  }
  async function getTodos() {
    const response = await axios.get("https://backend-todolist-c12t.onrender.com/todos");
    setTodos(response.data);
    console.log(response.data);
  }
  async function editTodo() {
    const response = await axios.put("https://backend-todolist-c12t.onrender.com/todos", {
      id: selectedTodo.id,
      name: inputValue,
    });
    
    setSelectedTodo();
    setInputVisility(false);
    getTodos();
    setInputValue("");
  }
  async function deleteTodo(todo) {
    const response = await axios.delete(
      `https://backend-todolist-c12t.onrender.com/todos/${todo.id}`
    );
    getTodos();
  }
  async function modifyStatusTodo(todo) {
    const response = await axios.put("https://backend-todolist-c12t.onrender.com/todos", {
      id: todo.id,
      status: true,
    });
    getTodos();
  }
  async function createTodo() {
    const response = await axios.post("https://backend-todolist-c12t.onrender.com/todos", {
      name: inputValue,
    });
    getTodos();
    setInputVisility(!inputVisbility);
    setInputValue("");
  }

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputVisbility, setInputVisility] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <header className="container">
        <div className="header">
          <h1>TodoList</h1>
        </div>
        <Todos todos={todos}></Todos>

        <input
          value={inputValue}
          style={{ display: inputVisbility ? "block" : "none" }}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          className="inputName"
        ></input>
        <button
          onClick={ inputVisbility ? selectedTodo ? editTodo : createTodo : handleWithNewButton
          }
          className="newTaskButton"
        >
          {inputVisbility ? "Confirm" : "+ New task"}
        </button>
      </header>
    </div>
  );
}

export default App;
