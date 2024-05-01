import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/layout/Layout";
import { Home } from "../pages/home/Home";
import { PropertyList } from "../pages/propertyList/PropertyList";
import { SingleList } from "../pages/singleList/SingleList";
import { Profile } from "../pages/profile/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/list",
        element: <PropertyList />,
      },
      {
        path: "/list/:id",
        element: <SingleList />,
      },
      {
        path: "/profile/:username",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <div>Hello login!</div>,
  },
  {
    path: "/register",
    element: <div>Hello register!</div>,
  },
]);

export default router;
