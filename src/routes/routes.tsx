import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import MyPhotos from "@/pages/my-photos/MyPhotos";
import Post from "@/pages/post/Post";
import Profile from "@/pages/profile/Profile";
import SignUp from "@/pages/sign-up/Sign-Up";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Error from "@/pages/error/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/posts",
        element: <Post />,
      },
      {
        path: "/my-photos",
        element: <MyPhotos />,
      },
    ],
  },

  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);
export default routes;
