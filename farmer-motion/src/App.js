import { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import routes from './routes';
import './App.css';

import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';

function App() {
  const location = useLocation();

  const getRoutes = (routes) => (
    routes.map(route => (
      <Route
        key={route.path}
        path={route.path}
        element={route.element}
      >
        {route?.children?.length && getRoutes(route.children)}
      </Route>
    ))
  )
  
  return (
    <div className="App">
      <Header />
      {/* <Suspense fallback={ <span>로딩중...</span> }> */}
        <div className="hidden-wrap">
          <AnimatePresence
            initial={ false } // 첫 로딩 페이지 애니메이션 여부
          >
            
              <Routes location={ location } key={ location.pathname }>
                { getRoutes(routes) }
              </Routes>
          </AnimatePresence>
        </div>
      {/* </Suspense> */}
    </div>
  );
}

export default App;
