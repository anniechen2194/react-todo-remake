import React from 'react';
// import "./App.css";
// import components
import Todo from './Todo';
// import Form from "./components/Form";
// import ToDoList from "./components/TodoList";


const TodoList = ( {todos, setTodos, filteredTodos} ) => {
    return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo 
            setTodos={setTodos} 
            todos={todos} 
            key={todo.id}
            todo={todo}
            text={todo.text}/>
        ))}
      </ul>
    </div>
    )
}

export default TodoList;
