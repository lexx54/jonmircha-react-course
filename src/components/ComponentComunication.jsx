import React, { Component } from 'react'

export default class Father extends Component {
  state = {
    counter: 0
  }

  increaseCounter = (e) => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    return (
      <>
        <h2>Component communication</h2>
        <p>Counter <b>{this.state.counter}</b></p>
        <Son message="Message for son Num1"/>
        <Son message="Message for son Num2" increaseCounter={this.increaseCounter}/>
      </>
    )
  }
}

class Son extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <>
      {this.props.message && <h2>{this.props.message}</h2>}
      {this.props.increaseCounter && <button onClick={this.props.increaseCounter}>Increase</button>}
      </>
    )
  }
}
