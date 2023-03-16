import React, { memo } from 'react'
import { Outlet } from 'react-router-dom';

const admin = () => {
  console.log('어드민 렌더링')
  return (
    <div>
      admin
      <Outlet />
    </div>
  )
}

export default memo(admin);