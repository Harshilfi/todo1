import React, { useState } from 'react';
import './App.css';
import TaskInput from './Components/TaskInput.js';
import TaskList from './Components/TaskList.js';

function App() {
  const [todo,setTodos]=useState([]);

  /*function that adds the user input as a task in the array "todo" with unique id that is the time it being executed */
  function addTodo(text){
    setTodos([...todo,{id:Date.now(),text}]);
  };
  /*function to remove the Task from the list, delTodo takes the id of the task as an argument which then gets filtered if it matches the condition and a new array of tasks is created without the inputted task */
  function delTodo(id){
    setTodos(todo.filter(t => t.id !== id));
  }
  return (
    <div className="App">
      <TaskInput addTodo={addTodo}/>
      <TaskList todo={todo} delTodo={delTodo}/>
    </div>
  );
}

export default App;
