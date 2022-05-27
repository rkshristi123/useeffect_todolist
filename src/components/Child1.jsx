import React from "react"
import Child2 from "./Child2"

const Child1=({SetInputt,value})=>{
    return (
        <>
        <h1> child1: {value}</h1>
        <input type="text" onChange={(event)=> SetInputt(event.target.value) } />
        <Child2 value={value}/>
        </>
    )
}

export default Child1