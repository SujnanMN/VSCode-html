import React, { Component } from 'react'

/**
 * demo without using hook useEffect
 */
export class ClassCounter1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    /**
     * plug in the usb device -- effect --- didmount
     */
    componentDidMount() {
        document.title = `clicked ${this.state.count} times`
    }

    /*
        effect is didUpdate
     */
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count != this.state.count) {
            console.log('updating doc title')
            document.title = `clicked ${this.state.count} times`
        }
    }

    //problem is every time i add a character to the input field, state is getting updated and component is being re rendered
    //i want componentDidUpdate to be called only when count increases
    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.name}
                    onChange={e => { this.setState({ name: e.target.value }) }}
                />
                <button
                    onClick={
                        () => this.setState({ count: this.state.count + 1 })
                    }>
                    click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClassCounter1
