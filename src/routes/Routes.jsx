import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import CardDetails from "../pages/CardDetails/CardDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
    ],
  },
]);

export default routes;
