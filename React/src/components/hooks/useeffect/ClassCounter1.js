import React, { Component } from 'react'

/**
 * demo without using hook useEffect
 */
export class ClassCounter1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    /**
     * plug in the usb device -- effect --- didmount
     */
    componentDidMount(){
        document.title = `clicked ${this.state.count} times`
    }

    /*
        effect is didUpdate
     */
    componentDidUpdate(prevProps,prevState){
        document.title = `clicked ${this.state.count} times`
    }
    
    render() {
        return (
            <div>
                <button 
                onClick ={ 
                    () => this.setState({count: this.state.count + 1})
                }>
                click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClassCounter1
