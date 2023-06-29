import Home from "./pages/home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {useContext } from "react";
 import ThemeContext from "./context/ThemeContext";
import SignIn from "./pages/Sign-in";
import Header from "./comp/header";
import SignUp from "./pages/Sign-up";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>sorry.........</h1>,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/header",
    element: <Header />,
  },
  
]);


function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
    <RouterProvider router={router} />;
    </div>
  )
  
}

export default App;
