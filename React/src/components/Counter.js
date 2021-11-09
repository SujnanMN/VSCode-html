import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increase() {
       /*  this.setState({                        //setState method is async  --- executed on a different thread // it will re render the component
            count: this.state.count + 1
        },
         () => { console.log('call back value ', this.state.count) })   //callback function(=>arrow function)  -- please execute this function[callback] only after the state has been set
       
        console.log(this.state.count)          //console is being written before setState method completes
    */ 
        this.setState((prevState,props) => ({
            count: prevState.count + props.addValue
        }))
        console.log(this.state.count)
    }


    increaseFive(){
        this.increase()
        this.increase()
        this.increase()
        this.increase()
        this.increase()
    }

    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.increaseFive()}>increment</button>
            </div>
        )
    }
}

export default Counter