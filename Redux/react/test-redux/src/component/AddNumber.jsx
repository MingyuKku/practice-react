import React, { Component } from "react";

class AddNumber extends Component {
  state = {
    size: 1
  }

  render () {
    return (
      <div>
        <h1>숫자 추가</h1>
        <input type="button" value="+" onClick={() => {this.props.onClick(this.state.size)}}></input>
        <input type="text" value={this.state.size} onChange={(e) => this.setState({size: e.target.value})}></input>
      </div>
    )
  }
}

export default AddNumber;