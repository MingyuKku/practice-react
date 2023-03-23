import React, { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Admin = () => {
  const location = useLocation();
  return (
    <div>
      <h1>어드민</h1>
      <Suspense fallback={ <span>로딩중...</span> }>
        <TransitionGroup className="admin-transition-group">
          
            <Outlet />
          
        </TransitionGroup>
      </Suspense>
    </div>
  )
}

export default Admin