import React, {useState } from 'react';
import './InputTodo.css';

const InputTodo = () => {
    const [description,setDescription] = useState('')
    console.log(description)
    const submit = async(e) =>{
        e.preventDefault();
        try {
            const body = {description};
            // axios.post("http://localhost:3002/todo",)
            const response = await fetch("http://localhost:3002/todo",{method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(body)
        });
            console.log(response)
        } catch (error) {
            console.error(error.message);
        }
    }
  return (
    <div className='form'>
       <h1 className='text-center my-5'>Input Todo</h1>
     <form onSubmit={submit}>
       <div className='form_submit'>
      <input className='form_control' placeholder='Enter todo' type='text' value={description} onChange={(e)=>setDescription(e.target.value)}/>
      <button className="btn-success" onClick={submit}>Add</button>
     </div>
     </form>
    </div>
  )
}

export default InputTodo
