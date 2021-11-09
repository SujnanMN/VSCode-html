import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log('clicked from classclick')
    }
    render() {
        return (
            <div>
                <button onClick = {this.clickHandler}>click me class</button>
            </div>
        )
    }
}

export default ClassClick