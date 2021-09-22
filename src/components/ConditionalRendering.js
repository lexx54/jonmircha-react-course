import React, { Component } from 'react'

function Login(){
  return(
    <div>
      <h3>login</h3>
    </div>
  )
}

function Logout(){
  return(
    <div>
      <h3>logout</h3>
    </div>
  )
}

export default class ConditionalRendering extends Component {
  constructor(props){
    super(props);
    this.state={
      session:false
    }
  }
  render() {
    return (
      <div>
        <h2>Conditional Rendering</h2>
        {this.state.session ? <Login/> : <Logout/>}
      </div>
    )
  }
}
