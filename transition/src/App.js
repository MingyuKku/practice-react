import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import routes from './routes';
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
      <Routes location={ location } key={ location } >
        { getRoutes(routes) }
      </Routes>
    </div>
  );
}

export default App;
