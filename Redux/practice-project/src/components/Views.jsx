import React, { useState } from 'react';
import { addView } from '../redux/index';
import { connect } from 'react-redux';

const Views = ({count, addViewGood}) => {
  const [ number, setNumber ] = useState(1);

  return (
    <div className='items'>
      <h2>조회수: {count}</h2>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => addViewGood(number)}>조회하기</button>
    </div>
  )
}

const mapStateToProps = ({ view }) => {
  return {
    count: view.count
  }
}

const mapDispatchToProps = { // 객체로 선언
  addViewGood: (num) => addView(num)
}

export default connect(mapStateToProps, mapDispatchToProps)(Views);