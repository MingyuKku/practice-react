import { createContext, useContext, useState, memo } from 'react';

const AuthContext = createContext(null);

const Provider = ({ children }) => {
  console.log('프로바이더 렌더!')
  const [ user, setUser ] = useState(null);

  const check = (user) => {
    setUser(user)
  }

  return (
    <AuthContext.Provider value={ {user, check} }>
      { children }
    </AuthContext.Provider>
  )
}

export default memo(Provider);

export const useAuth = () => (
  useContext(AuthContext)
)