import React, {useState} from 'react';
import './style module.css'

const TodoForm = ({addTodo}) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(input)
        setInput('')
    }
    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <form className='container'
              onSubmit={handleSubmit}>
            <input type='text'
                   value={input}

                   placeholder='Keep the text ....'
                   onChange={handleInputChange}
            />
            <button type='submit' className='btn'>
                Add
            </button>
        </form>
    )
}
export default TodoForm;