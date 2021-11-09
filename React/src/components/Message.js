import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'welcome visitor to dxc'  //message partition
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button   onClick = {()=> this.changeMessage()}>subscribe</button>

            </div>
        )
    }

    changeMessage(){
        this.setState({    //changing the content of the partition
            message: 'thank you for subscribing'
        })
    }

}

export default Message