import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList"
// importing components

function App() {
  
  // State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  // run once only when the project starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Use Effect
  // this function will run the first time you open the project, and also anytime when [whatever] happens
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);  // every time the state of "todos" changes, run this function

  // Functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    } 
  }
  // Save to local
  const saveLocalTodos = () => {
    // check if our local storage has todos
    localStorage.setItem('todos', JSON.stringify(todos));
    
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Annie's Todo List</h1>
      </header>
      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText} 
      setStatus={setStatus}
      
      />
      <TodoList 
      filteredTodos={filteredTodos}
      setTodos={setTodos} 
      todos={todos} />
    </div>
  );
}

export default App;
