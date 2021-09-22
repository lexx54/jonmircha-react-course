import React, { Component } from 'react'

export default class ElementRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Spring","Summer","Auutum","Winter"]
    }
  }
  render() {
    return (
      <div>
        <h2>Elements Rendering</h2>
        <ol>
          {this.state.seasons.map(season => {
            return (<li>{season}</li>)
          })}
        </ol>
      </div>
    )
  }
}
