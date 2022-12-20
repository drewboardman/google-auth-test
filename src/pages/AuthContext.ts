import React from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
}

const AuthContext = React.createContext<undefined | AuthContextType>(undefined);

export default AuthContext;