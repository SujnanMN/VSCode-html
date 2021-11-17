import React, { Component } from 'react'
import Input from './Input'

 class FocusInput extends Component {
     constructor(props) {
         super(props)
     
        this.conponentRef = React.createRef()
     }

     clickHandler = () => {
         this.conponentRef.current.focusInput()
     }
     
    render() {
        return (
            <div>
            <Input ref = {this.conponentRef}/>
                <button onClick = {this.clickHandler}>focus input</button>
            </div>
        )
    }
}

export default FocusInput
