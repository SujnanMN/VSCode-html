import React from 'react'

function FunctionClick() {

   function clickHandler(){
        console.log('button clicked fc')
    }
    return (
        <div>
            <button  onClick = {clickHandler}>clickmefc</button>
        </div>
    )
}

export default FunctionClick