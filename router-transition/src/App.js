import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { set_transition_class, set_location } from './redux/pageTransition/actions';
import { Suspense, useEffect, useState } from 'react';
import routes from './routes'

import Header from './components/Header'

function App() {
  console.log('마운트,')
  const location = useLocation();
  const { transitionClass, locate } = useSelector(state => state.transitionReducer)
  const dispatch = useDispatch();

  // const [ displayLocation, setDisplayLocation ] = useState(location);

  const animationEnd = () => {
    if (transitionClass === 'fadeOut') {
      dispatch(set_transition_class('fadeIn', location))
      // setDisplayLocation(location);
    }
  }
  
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
  
  useEffect(() => {
    if (location !== locate) {
      dispatch(set_transition_class('fadeOut'))
    };
  }, [location])

  return (
    <div className="App">
      <Header/>
      <Suspense fallback={ <span>로딩중...</span> }>
        <div className={`routes-wrap ${transitionClass}`}
          onAnimationEnd={ () => animationEnd() }
        >
        {/* <div className={`routes-wrap`}> */}
          {/* location속성에 넣어준 displayLocation의 값에 따라서 라우터가 바뀐다 */}
          <Routes location={ locate }>
            { getRoutes(routes) }
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
