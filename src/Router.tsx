import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

export const unauthenticatedRoutes = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "*", element: <Navigate to="/login" /> }
])

export const authenticatedRoutes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "*", element: <Navigate to="/" /> }
])
