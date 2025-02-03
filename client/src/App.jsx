import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Projects from "./pages/Projects";
import RootLayout from "./Components/RootLayout";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/sign-in", element: <SignIn /> },
        { path: "/sign-out", element: <SignOut /> },
        { path: "/projects", element: <Projects /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
