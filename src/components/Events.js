import React, { Component } from 'react'

export class EventsES6 extends Component {
  constructor(props){
    super(props)
    this.state= {
      counter:0
    }

    this.sum = this.sum.bind(this)
    this.substract = this.substract.bind(this)
  }
  sum(){
    this.setState({counter:this.state.counter + 1})
  }
  substract(){
    this.setState({counter:this.state.counter - 1})
  }
  render() {
    return (
      <div>
        <h2>Events ES6</h2>
        <p>{this.state.counter}</p>
        <nav>
          <button onClick={this.sum}> + </button>
          <button onClick={this.substract}> - </button>
        </nav>
      </div>
    )
  }
}

export class EventsES7 extends Component{
  state={
    counter:0
  }
  sum = () =>{
    this.setState({counter:this.state.counter + 1})
  }
  substract = () => {
    this.setState({counter:this.state.counter - 1})
  }
  render(){
    return(
      <div>
      <h2>Events ES7</h2>
      <p>{this.state.counter}</p>
      <nav>
        <button onClick={this.sum}> + </button>
        <button onClick={this.substract}> - </button>
      </nav>
    </div>
    )
  }
}

export class MoreEvents extends Component{
  handleCLick = (e, message="") => {
    console.log(e);
    //acces the native event
    console.log(e.nativeEvent)
    console.log(`Passing optionals parameters, ${message}`)
  }
render(){
  return(
    <div>
      <h1>More About Events</h1>
      <button onClick={this.handleCLick}>Greet</button>
      <button onClick={(e) => this.handleCLick(e,"greetings")}>Greet</button>
    </div>
  )
}
}