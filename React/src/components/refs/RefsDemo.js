import React, { Component } from 'react'

/**
 * refs is about getting the handle of  dom element
 */
 class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
    this.inputRef = React.createRef()
    }
    
    componentDidMount(){
       this.inputRef.current.focus()
        console.log(this.inputRef)
    }

clickHandler = () => {
    alert(this.inputRef.current.value)
}

    render() {
        return (
            <div>
                <input type = "text" ref = {this.inputRef}/>
                <button onClick = {this.clickHandler}> fetch value</button>
            </div>
        )
    }
}

export default RefsDemo
