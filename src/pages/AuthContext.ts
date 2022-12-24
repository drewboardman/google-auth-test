import React from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
}

export const AuthContext = React.createContext<undefined | AuthContextType>(undefined);
