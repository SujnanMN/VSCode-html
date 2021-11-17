import React, { useState,useEffect } from 'react'

function CounterHook1() {
const [count,setCount] = useState(0)
//use effect will be called after render method executes each time
useEffect(
    ()=>{document.title = `you clicked ${count} times`}
)
    return (
        <div>
            <button onClick = { ()=> setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default CounterHook1
