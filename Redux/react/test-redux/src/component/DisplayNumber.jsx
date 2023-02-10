import React, { Component } from "react";

export default class DisplayNumber extends Component {
  render () {
    return (
      <div>
        <h1>디스플레이 숫자</h1>
        <input type="button" value="+"></input>
        <input type="text" value={this.props.number} readOnly></input>
      </div>
    )
  }
}