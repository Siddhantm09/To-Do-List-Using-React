import React, { useEffect,useState } from 'react'

let globalID=0;
function App(){


const [task,setTask]=useState("")
   const[todos,setTodos]=useState([])

function createtodo(event){
    event.preventDefault() //does not allow to reload
     
    setTodos(oldTodos=>{  //append new values after old
    setTask('')  //empty's the block after submission
        return [...oldTodos,{todo: task,  id: globalID++}]
})
}

function deleteItem(itemID){
        setTodos(oldTodos=>oldTodos.filter(item=>item.id!==itemID))
    }

    return <div>
    <h1>Best To-Do App</h1>
    <form onSubmit={createtodo}>
    <input 
    type ="text" 
    value={task} 
    onChange={event=>{
    setTask(event.target.value)
    }}/>

    <button type='submit'>Create Todo</button>
    </form>
    
    

    <ul>
    {todos.map((item,index)=>{
        return <div key={item.id}>
        <li>{item.todo}{item.id}</li>
        <button onClick={()=>deleteItem(item.id)}>Delete</button>
        </div>
        
    })}
    
    </ul>   
    
</div>
    
}

export default App