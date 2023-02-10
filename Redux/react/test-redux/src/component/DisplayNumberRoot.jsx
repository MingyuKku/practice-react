import React, { Component } from "react";
import DisplayNumber from "./DisplayNumber";


export default class DisplayNumberRoot extends Component {

  
  render () {
    return (
      <div>
        <h1>디스플레이 숫자 루트</h1>
        <DisplayNumber number={this.props.number} />
      </div>
    )
  }
}