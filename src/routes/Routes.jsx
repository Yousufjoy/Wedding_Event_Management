import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import CardDetails from "../pages/CardDetails/CardDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/details/:id",
        element: <CardDetails></CardDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
