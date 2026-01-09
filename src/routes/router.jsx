import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../layouts/HomeLayout/Home";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        index: true,
        Component : MainLayout
      },
      {
        path: "blog",
        Component : Blog
      },
      {
        path: "/contact",
        Component : Contact
      },
    ],
  },

  {
    path: "*",
    Component: ErrorPage,
  },
]);
