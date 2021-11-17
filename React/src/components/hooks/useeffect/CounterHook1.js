import React, { useState,useEffect } from 'react'

function CounterHook1() {
const [count,setCount] = useState(0)
const [name,setName] = useState('')
//use effect will be called after render method executes each time
useEffect(
    ()=>{
        console.log('updating -- useEffect hook')
        document.title = `you clicked ${count} times`
    },
    [count] //hey update only when the count variable changes
)
    return (
        <div>
            <input
                type ='text'
                value = {name}
                onChange = {
                    e => setName(e.target.value)
                }
            />
            <button onClick = { ()=> setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default CounterHook1
