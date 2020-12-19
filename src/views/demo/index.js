import React, { Component } from 'react'


export default class Demo extends Component {

    constructor(props){
        super(props)
        this.state={
            name:'ishan'
        }
    }

    handleClick =()=> {
        console.log('my name is anthony gonsalvis')
        console.log(this)
        // this.setState({name:'pratyush'})
    }
    render() {
        return (
            <div>
                hello i am demo component
                <button onClick={handleClick}>click me</button>
                <div>{this.state.name}</div>
            </div>
        )
    }
}
