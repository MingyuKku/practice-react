import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../App';
// import { useAuth } from '../components/Provider'

const Index = () => {
  // const { user } = useAuth();

  console.log('인덱스 렌더링')
  // return user !== null ? (
  //   <div>Index</div>
  // ) : <Navigate to="/admin" replace={true} ></Navigate>
  return (
    <div>Index</div>
  )
}

export default Index;