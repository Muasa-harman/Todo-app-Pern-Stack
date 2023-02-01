import React, { Fragment,useEffect,useState } from 'react'
import EditTodo from './EditTodo'
import './ListTodos.css'

const ListTodos = () => {
    const [todo,setTodo] = useState('')
    // delete todo
    const deleteTodo = async(id) =>{
        try {
            const res = await fetch(`http://localhost:3002/todo/${id}`,{method:"DELETE"});
            console.log(res)
            setTodo(todo.filter(todo => todo.todo_id !== id));
        } catch (error) {
            console.error(error.message)
        }
    }
    async function getTodo(){
        const res = await fetch("http://localhost:3002/todo");

        const todoArray = await res.json();

        setTodo(todoArray);
    }

    useEffect(()=>{
        getTodo();
    },[]);
    console.log(todo)

  return (
      <Fragment>
         <table class="table">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {todo.map(todo =>(
        <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td>Edit</td>
            <td><button className='btn_danger' onClick={(id)=>deleteTodo(todo.todo_id)}>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
      </Fragment>
  
  )
}

export default ListTodos;
