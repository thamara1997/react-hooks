import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  return (
    <LoginContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
