import React, { Component } from "react";
import AddNumber from "./AddNumber";

export default class AddNumberRoot extends Component {
  render () {
    return (
      <div>
        <h1>숫자 추가 루트</h1>
        <AddNumber onClick={(size) => {
          console.log('싸이즈', size)
        }} />
      </div>
    )
  }
}