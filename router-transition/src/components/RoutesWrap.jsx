import { useState, useEffect } from 'react';
import routes from '../routes';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTransitionContext } from './provider/PageTransition';

const RoutesWrap = () => {
  const { transitionStage, setFadeInTransition, setFadeOutTransition } = useTransitionContext();
  const location = useLocation();

  const [ displayLocation, setDisplayLocation ] = useState(location);

  const animationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setFadeInTransition();
      setDisplayLocation(location);
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
    if (location !== displayLocation) setFadeOutTransition();
  }, [location])

  return (
    <div className={`routes-wrap ${transitionStage}`}
      onAnimationEnd={ () => animationEnd() }
    >
      <Routes location={ displayLocation }>
        { getRoutes(routes) }
      </Routes>
    </div>
  )
}

export default RoutesWrap