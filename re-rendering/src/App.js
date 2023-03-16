import { useEffect, useState } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Provider from './components/Provider';
// import { createContext } from 'react';

// export const AuthContext = createContext(null);

function App() {
  // const [ user, setUser ] = useState(null);

  // const check = (user) => {
  //   setUser(user)
  // }

  // const [ test, setTest ] = useState(null);

  // useEffect(() => {
  //   setTest(1);
  // }, [])


  return (
    <div className="App">
      {/* <AuthContext.Provider value={ { user, check } }>
        <Wrapper />
      </AuthContext.Provider> */}
      
      <Provider>
        <Wrapper />
      </Provider>
    </div>
  );
}

export default App;
