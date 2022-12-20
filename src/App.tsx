import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return isAuthenticated ? (
    <h1>Authenticated</h1>
  ) : (
    <>
      <h1>Not Authenticated</h1>
      <button onClick={() => setIsAuthenticated(true)}>Login</button>
    </>
  );
}

export default App;
