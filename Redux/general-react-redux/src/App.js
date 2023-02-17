import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import './App.css';

const initState = {
  number: 1
}
function reducer(state = initState, action) {
  switch (action.type) {
    case 'PLUS': 
      return {
        ...state,
        number: state.number + 1
      };
    default: return state;
  }
}

const store = createStore(
  reducer
)

export default function App() {
  const [ number, setNumber ] = useState(1);
  
  return (
    <div id="container">
      <h1>Root : { number }</h1>
      <div id='grid'>
        <Provider store={ store }>
          <Left1/>
          <Right1/>
        </Provider>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div>
      <h1>Left1 :</h1>
      <Left2 />
    </div>
  )
}

function Left2() {
  return (
    <div>
      <h1>Left2 :</h1>
      <Left3 />
    </div>
  )
}

function Left3() {
  const number = useSelector(state => state.number)

  return (
    <div>
      <h1>Left2 : { number }</h1>
    </div>
  )
}

function Right1() {
  return (
    <div>
      <h1>Right1 :</h1>
      <Right2 />
    </div>
  )
}

function Right2() {
  return (
    <div>
      <h1>Right2 :</h1>
      <Right3 />
    </div>
  )
}

function Right3() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={() => {
        dispatch({type: 'PLUS'})
      }} />
    </div>
  )
}