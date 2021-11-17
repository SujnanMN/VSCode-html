import React, {useState} from 'react'



//useState is a hook that allows you to add a state to stateless component [functional component]
function HookCounter() {
   const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick = {()=>setCount(count +1)}> hook Count {count}</button>
        </div>
    )
}

export default HookCounter
