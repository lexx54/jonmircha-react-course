import React, { Component } from 'react'

export default class State extends Component {
  constructor(props){
    super(props);

    this.state={
      counter:0
    }
    // setInterval(()=>{
    //   this.setState({counter:this.state.counter + 1})
    // },1000)
  }
  render() {
    return (
      <div>
        <h2> the state</h2>
        <p>{this.state.counter}</p>
      </div>
    )
  }
}


