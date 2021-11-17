import React from 'react'

//demo on inline styling

const heading = {
    fontSize: '72px',
    color: 'blue'

}

function Inline() {
    return (
        <div>
            <h1 className='error'>inline error</h1> {/*error style is locally scoped no need to import */}
            <h1 style={heading}>Inline heading</h1>
        </div>
    )
}

export default Inline
