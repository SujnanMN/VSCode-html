import React from 'react'

function MemoComp({name}) {
    console.log('rendering memo component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp) // higher order components -- component being passed as a param to another component
