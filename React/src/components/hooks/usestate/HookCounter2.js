import React, {useState} from 'react'

function HookCounter2() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount) //useState is like a tree's  branch providing a hook & a pipe to store data in tree
    
    const incrementFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    
    
    
    return (
        <div>
            Count : {count}
            <button onClick = {() => setCount(initialCount)}>Reset</button>
            <button onClick = {() => setCount(count + 1)}>Increment</button>
            <button onClick = {() => setCount(count - 1)}>Decrement</button>
            <button onClick = {incrementFive}>Increment 5</button>



        </div>
    )
}

export default HookCounter2
