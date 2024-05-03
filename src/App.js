import './App.css';
import React, {useState} from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import "../../my-todo/src/Components/global.css"
const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState(false);

  const addTodo = (input) => {
    const newTodos = ({
      id: Date.now(),
      task: input,
      completed: false,
    });
    setTodos([...todos, newTodos])
    console.log(todos)
  }

  const deleteTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const isCompleted = (id) => {
    setTodos([...todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : {...todo})])
  }

  const editTask = (id,NewTask) => {
    setTodos([...todos.map((todo)=> todo.id === id ? {...todo,task : NewTask} : {...todo})])

  }
  return (
      <div>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo) => (<TodoList
                todo={todo}
                deleteTask={deleteTask}
                key={todo.id}
                isCompleted={isCompleted}
                editTask={editTask}
            />
        ))}
      </div>
  );
};
export default App;



