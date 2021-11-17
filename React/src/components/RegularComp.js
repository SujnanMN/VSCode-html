import React, { Component } from 'react'

 class RegularComp extends Component {
    render() {
        console.log('--REGULAR component--')

        return (
            <div>
                regular component {this.props.name}
            </div>
        )
    }
}

export default RegularComp
