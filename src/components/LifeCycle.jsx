import React, { Component } from 'react'

class Clock extends Component {
  constructor(props){
    super(props)
  }
  componentWillUnmount(){
    console.log(3,"the compononent has been deleted from DOM")
  }
  render() {
    return (
      <div>
        {this.props.hour}
      </div>
    )
  }
}

export default class LifeCycle extends Component {
  constructor(props){
    super(props)
    console.log(0, "Initializing component, not rendered yet")
    this.state = {
      hour:new Date().toLocaleTimeString(),
      visible:false,
    }
    this.timer = null;
  }

  componentDidMount(){
    console.log(1,"the component is already in DOM")
  }
  componentDidUpdate(prevProps, prevState){
    console.log(2,"The component's state or props has changed");
    console.log("prevprops", prevProps);
    console.log("prevState",prevState)
  }


  start = (e) => {
    this.setState({visible:true});
    this.tiktok();
  }
  stop = (e) => {
    this.setState({visible:false});
    clearInterval(this.timer);
  }

  tiktok = (e) => {
    this.timer = setInterval(()=>this.setState({hour: new Date().toLocaleTimeString()}),1000)
  }

  render() {
    console.log(4,"component renders or re-renders for any change")
    return (
      <>
        <h2>LifeCycle of components</h2>
        {this.state.visible && <Clock hour={this.state.hour}/>}
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>Stop</button>
      </>
    )
  }
}
