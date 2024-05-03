import React, {useState} from 'react';
import './style module.css'
import {BiX} from "react-icons/bi";
import {GiSaveArrow} from "react-icons/gi";
import {MdEditNote} from "react-icons/md";

const TodoList = ({todo, deleteTask, isCompleted, editTask}) => {
    const [edit, setEdit] = useState(false);
    const [newTask, setNewTask] = useState(todo.task);

    return (
        <div className='container'>
            <div className='row'>
                {edit ?
                    <input
                        type="text"
                        defaultValue={todo.task}
                        onChange={e => {
                            setNewTask(e.target.value)
                        }}
                    />
                    :
                    <div className='completed'
                         style={todo.completed ?
                             {textDecoration: 'line-through'}
                             : {textDecoration: 'none'}}>
                        {todo.task}
                    </div>
                }

                {edit ?
                    <button
                        onClick={e => {
                            editTask(todo.id, newTask)
                            setEdit(!edit)
                        }}
                    ><GiSaveArrow color={'red'} size={22}/>
                    </button>
                    :
                    <button className='edit'
                            onClick={e => setEdit(!edit)}
                    >
                        <MdEditNote color={'blue'} size={33}/>
                    </button>
                }
                <input type='checkbox' onClick={() => isCompleted(todo.id)}
                       id='checkbox'/>
                <button onClick={() => deleteTask(todo.id)} className='todo-task'>
                    <BiX color={'red'} size={35}/>
                </button>
            </div>
        </div>);
};
export default TodoList;