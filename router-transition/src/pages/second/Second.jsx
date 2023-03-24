import React, { useState } from 'react';
import { Routes, Route, useRoutes, useLocation, Outlet, Link } from 'react-router-dom';
import secondRoutes from '../../secondRoutes';

const Second = () => {
  const location = useLocation();
  // const secondElement = useRoutes(secondRoutes);

  const [ displayLocation, setDisplayLocation ] = useState(location);

  return (
    <div>
      <Link style={{marginRight: '10px'}} to="/second/page1">page1</Link>
      <Link style={{marginRight: '10px'}} to="/second/page2">page2</Link>
      <Link to="/second/page3">page3</Link>
      <h1>세컨드 페이지</h1>
      <div className="wrapper">
        <Outlet location={ displayLocation } />
      </div>
      {/* <Routes location={ location }>
        {secondRoutes.map(route => (
          <Route key={ route.path } path={ route.path } element={ route.element } />
        ))}
      </Routes> */}
    </div>
  )
}

export default Second