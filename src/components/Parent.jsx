import React from "react"
import Child1 from "./Child1"

const Parent=()=>{

    const [inputt,SetInputt] = React.useState("")
    return(
        <>
     <h1> parent : {inputt}</h1>
     <Child1 SetInputt={SetInputt} value={inputt}/>

        </>
    )
}
export default Parent