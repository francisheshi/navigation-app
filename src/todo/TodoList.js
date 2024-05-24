import React, { useState } from 'react';
import './todoList.css';

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [valItem, setValItem] = useState('');

    const handleChangeItem = (event) => {
        setValItem(event.target.value)
    };

    const handleAddItem = () => {
        setTodoList([
            ...todoList,
            valItem
        ])
        setValItem()
    };

    const handleDeleteItem = (item) => {
        setTodoList(todoList.filter((ele) => ele !== item));
    };


    return (
        <div className='todo-list'>
            <hr style={{ width: '95%' }} />

            <h3>Todo List - add items</h3>
            
            <input type='text' value={valItem} onChange={handleChangeItem}/>{' '}
            <button onClick={() => handleAddItem()}>Add</button>

            {todoList.length > 0 && todoList.map(todo => {
                return (
                    <div className='list-container'>
                        <p className='todo-item' onChange={handleChangeItem}>{todo}</p>
                        <button type='button' onClick={() => handleDeleteItem(todo)}>X</button>
                    </div>
                );
            })}
        </div>
    );
}
 
export default TodoList;