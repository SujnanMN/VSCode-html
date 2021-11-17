import React, { Component } from "react";

class Welcome extends Component{

    render(){
        const {name,alias} = this.props
       // const{state1,state2} = this.state
        return <h1>welcome mr {name} your alias is {alias}</h1>
    }

}

export default Welcome