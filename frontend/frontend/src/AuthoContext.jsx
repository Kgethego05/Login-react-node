import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(()=>{
   return localStorage.getItem('isAuthenticated') === 'true';
  });
  //in this case, we start by initializing the isAuthenticated value to either true or false, we know state lose values on reload. so then since user logged in the local
  // storeage we stored value true,and now re-render happens and check if value stored in local is exactly true, the it finds that the local had true value and it matches then nou
  // isAuthenticated is re-initialized to true. then if user logs out then refresh the pages state checks agaim in the loal storage and find nothing which is null the compare with true
  //then find they doont match the isAuthenticated in now initialized to false,so on and on

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  }
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  }
  return (

    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
    
  );
};

//LEKOMPO MIX 2025 (ft Shandesh, Janesh, Kharishma, Shebeshxt, Zoli White Smoke )