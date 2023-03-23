import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
// import CSSTransition from 'react-transition-group/CSSTransition';

const ExampleA = () => {
  const [ isEnter, setIsEnter ] = useState(true); // 처음 값이 true일 때만 appear 적용할 수 있음
  
  return (
    <div className='container'>
      <button onClick={() => {setIsEnter((v) => !v)}}>트렌지션</button>
      <CSSTransition
        in={ isEnter }
        appear={ true }
        timeout={ {appear: 2000, enter: 300, exit: 300} }
        classNames="myTrans"
      >
        
        <p className='my-text'>애니메이션 요소 { isEnter ? '엔터':'종료' }</p>
      </CSSTransition>
    </div>
  )
}

export default ExampleA;