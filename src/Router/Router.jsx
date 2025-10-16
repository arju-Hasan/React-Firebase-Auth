import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Signup from "../Component/Signup/Signup";





const router = createBrowserRouter([
  {
    path: "/",
   Component: Root,
   children: [
    {
        path:'/home',
        Component: Home,
    },
     {
        path:'/login',
        Component: Login,
    }, 
    {
        path:'/signup',
        Component: Signup,
    },
   ]
  },

]);

export default router;