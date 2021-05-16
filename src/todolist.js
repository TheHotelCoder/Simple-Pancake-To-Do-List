
import './App.css';
import React from "react";
import { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';



const ToDoList = () => {
  //Use States for generating list
	const [toDos, setTodos] = useState([]);
  //Use State to ass a task to the list
	const [task, setTask] = useState("");

  //Function for add task button
	const AddTask = () => {
    //Store new task in new toDos Array
		const newTodos = toDos.concat({ title: task, id: toDos.length + 1 });
		setTodos(newTodos);

	};
  //Function to delete task button
  const DeleteTask = (id) => {
    const editedTodos = toDos.filter(todo => todo.id !== id)
    setTodos(editedTodos)
  }

  
      //Function to count items on list 
      const countListItems = () => {
        let counter = 0
        for(let todo = 0; todo < toDos.length; todo++) {
          counter += 1
          
        }
      return counter
     
      }

	return (
		<div className="container">
      <h1 className="header">To Do's</h1>
			<input
				type="text"
        required
				value={task}
				onChange={e => {
					setTask(e.target.value);
				}}
			/>
			<button className="addButton" required onClick={AddTask}>Add a new task!</button>

			<ul>
				{toDos.map(todo => {
					return <li key={todo.id}>{todo.title}<button className="removeTask" onClick={() => DeleteTask(todo.id)}>Done!</button></li>;
				})}
			</ul>
      <p className="itemsCounter"><strong className="number">{countListItems()}</strong> item(s) left. <strong>You can do this!</strong></p>
      
		</div>
	);
};
export default ToDoList;
