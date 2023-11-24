import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  legacy_createStore as createStore, applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './_reducers';

import './index.css';
import App from './App';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  // </React.StrictMode>
);

