import React from 'react';
import { addSubscriber } from '../redux/index';
import { connect } from 'react-redux';

const Subscribers = ({count, addSubscriberGood}) => {
  return (
    <div className='items'>
      <h2>구독자 수: {count}</h2>
      <button onClick={() => addSubscriberGood()}>구독하기</button>
    </div>
  )
}

const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count
  }
}
// const mapDispatchToProps = (dispatch) => { // 함수로 선언
//   return {
//     addSubscriberGood: () => dispatch(addSubscriber())
//   }
// }

const mapDispatchToProps = { // 객체로 선언
  addSubscriberGood: addSubscriber
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);