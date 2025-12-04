import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import Blog from "../Pages/Blog";
import Content from "../Components/Content";

import Author from "../Components/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "blogs",
        Component: Blogs,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },
      {
        path: "blogs/:id",
        Component: Blog,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),

        children: [
          {
            index: true,
            Component: Content,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: "author",
            element: <Author />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },
      {
        path: "bookmarks",
        Component: Bookmarks,
      },
    ],
  },
]);
