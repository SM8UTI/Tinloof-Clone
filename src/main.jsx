import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Store from "./Pages/Store.jsx";
import About from "./Pages/About.jsx";
import News from "./Pages/News.jsx";
import Wishlist from "./Pages/wishlist.jsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Store",
    element: <Store />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/News",
    element: <News />,
  },
  {
    path: "/Wishlist",
    element: <Wishlist />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
