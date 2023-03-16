import React, { useEffect, memo, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Admin from '../pages/Admin';
import Faq from '../pages/Faq';
import { useAuth } from './Provider';

const Wrapper = () => {
  console.log('래퍼 렌더링')
  const { user, check } = useAuth();

  const testCheck = () => {
    setTimeout(() => {
      check('유저!')
    }, 500)
  }
  
  useEffect(() => {
    testCheck();
  }, [])

  return (
    <Routes>
      <Route path='/' element={ <Index/> }></Route>
      <Route path='/admin' element={ <Admin /> }>
        <Route path='faq' element={ <Faq /> }></Route>
      </Route>
    </Routes>
  )
}

export default memo(Wrapper);
// export default Wrapper;