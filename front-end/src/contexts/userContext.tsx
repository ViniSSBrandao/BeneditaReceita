import { createContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext({} as any);
export default UserContext;

export function UserProvider({ children }:{children: any}) {
  
  const [userData, setUserData] = useLocalStorage('userData', {children});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}