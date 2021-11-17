import React, { Component } from 'react'
//run effects only once
export class ClassMouse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x:0,
             y:0
        }
    }

    logMousePosition = e =>{
        this.setState({
            x: e.clientX, y: e.clientY
        })
    }
    
componentDidMount(){
    window.addEventListener('mousemove',this.logMousePosition) //i am adding this listener only once
}

    componentWillUnmount(){
        window.removeEventListener('mousemove',this.logMousePosition)
    }

    render() {
        return (
            <div>
                X - {this.state.x} Y- {this.state.y}
            </div>
        )
    }
}

export default ClassMouse
