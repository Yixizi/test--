// import {useRoutes} from "react-router-dom";
import React from "react";
import { Navigate } from "react-router-dom";

const Home = React.lazy(() => import("@/pages/home"));
const Entire = React.lazy(() => import("@/pages/entire"));
const Detail = React.lazy(() => import("@/pages/detail"));
const Demo = React.lazy(() => import("@/pages/demo"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
];

export default routes;
