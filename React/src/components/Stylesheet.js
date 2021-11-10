import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    //literal-$, template --{} and attribute-name

    let className = props.enabled ? 'primary' : ''
    return (
        <div>
            <h1 className = {`${className} font-xl`}> welcome to style sheets</h1>
        </div>
    )
}

export default Stylesheet