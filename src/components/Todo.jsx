import React from 'react'
import {useState} from "react"
import {useEffect} from "react"
import axios from "axios"

const Todo = () => {
    const [newtodo,setNewtodo] = useState("")
    const [todos,setTodos] = useState([]);
    const [page,setPage] = useState(1)
    const [totalcount,setTotalcount] =useState(0)
    const [limit,setLimit]=useState("5")
const saveInfo=()=>{
    
    fetch("http://localhost:3004/todos",{
        method:"POST",
        headers: {
            "content-type": "application/json",
        },
        body:JSON.stringify({
       text:newtodo,
       done:false,
        }),
    
    })
    .then((r)=>r.json())
    .then((d)=>{
        setTodos([...todos,d]);
        setNewtodo("")
    });

}

    useEffect(()=>{
        axios
       .get(`http://localhost:3004/todos?_page=${page}&_limit=${limit}`)
      
       .then((d)=>{
           setTodos(d.data);
           console.log(d)
           setTotalcount(Number(d.headers["x-total-count"]))
       });
       },[page,limit]);
    
  return (
    <div>Todo
        <div>
            <div>
            <button disabled={page<=1} onClick={()=>setPage(page-1)}>prev</button>  
            <input
            value={newtodo} 
            onChange={(e)=>setNewtodo(e.target.value)}
            />
            <button onClick={saveInfo}>+</button>
            <button disabled={totalcount<=page*limit} onClick={()=>setPage(page+1)}>next</button>
            <select onChange={(e)=>setLimit(Number(e.target.value))}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
            </div>
            {todos.map((todo)=>(
               <div key={todo.id}>{todo.text}</div>
            ))}
            
        </div>
    </div>
    
  );
};

export default Todo