
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layout/Root";
import ErrorPage from "../firebase/components/ErrorPage";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyLists from "../pages/MyLists";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import UpdatePage from "../pages/UpdatePage";
import ViewDetailsPage from "../pages/ViewDetailsPage";
import PrivateRoute from "./PrivateRouter";
import PrivateRouter from "./PrivateRouter";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader:() => fetch('http://localhost:5000/addTouristsspot')
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/allTouristsspot",
          element: <AllTouristsSpot></AllTouristsSpot>,
          loader:() => fetch('http://localhost:5000/addTouristsspot')
        },
        {
          path: "/addTouristsspot",
          element:<PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute> ,
        },
        {
          path: "/myList",
          element:<PrivateRouter><MyLists></MyLists></PrivateRouter> ,
          loader:() => fetch('http://localhost:5000/addTouristsspot')
        },
        {
          path: "/updatePage/:id",
          element: <PrivateRouter><UpdatePage></UpdatePage></PrivateRouter>,
          loader:({params}) => fetch(`http://localhost:5000/addTouristsspot/${params.id}`)
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/viewDetailsPage/:id",
          element: <PrivateRouter><ViewDetailsPage></ViewDetailsPage></PrivateRouter>,
          loader:() => fetch('http://localhost:5000/addTouristsspot')
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
]},
  ]);
export default router;