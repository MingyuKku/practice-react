import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [ todoList, setTodoList ] = useState([]);

  useEffect(() => {
    fetchTodoList();
  }, [])

  const fetchTodoList = async () => {
    const { data } = await axios('http://localhost:4000/api/todo')
    console.log('응답', data)
    setTodoList(data);
  }
  
  const fetchAddTodo = async (text, done) => {
    const { data } = await axios.post('http://localhost:4000/api/todo', { text, done })
    fetchTodoList();
  }
  
  

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    fetchAddTodo(text, done)
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={ onSubmitHandler }>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>
      {todoList.map(todo => (
        <div key={ todo.id }>
          <div>{ todo.id }</div>
          <div>{ todo.text }</div>
          <div>{ todo.done ? 'Y':'N' }</div>
        </div>
      ))}
    </div>
  );
}

export default App;
