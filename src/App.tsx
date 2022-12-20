import React from "react";
import "./App.css";
import AuthContext from "./pages/AuthContext";
import { RouterProvider } from "react-router-dom";
import {authenticatedRoutes, unauthenticatedRoutes} from "./Router";

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const login = () => setIsAuthenticated(true);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {isAuthenticated ? (
        <RouterProvider router={authenticatedRoutes} />
      ) : (
        <RouterProvider router={unauthenticatedRoutes} />
      )}
    </AuthContext.Provider>
  )
}

export default App;
