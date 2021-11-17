import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

/**
 * this parent component is a stateful/content-partition
 */
export class ParentComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         parentName: 'Shahenshah'
    }
    this.greetParent = this.greetParent.bind(this)
}

/**
 * i want to pass the reference of this method as a property to the child
 */
    greetParent(childName){
        //alert('hello '+this.state.parentName)
        alert(`hello ${this.state.parentName} from  ${childName}`) //string templates-- es6
    }

    render() {
        return (
            <div>
                <ChildComponent praneshwarHandler = {this.greetParent}/>   {/*i am passing the reference of greet parent method to the child via a props*/}
            </div>
        )
    }
}

export default ParentComponent
