import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "../Pages/Shared Comp/PrivateRoute/PrivateRoute";
import ViewBrandDetails from "../Pages/BrandCategory/ViewBrandDetails/ViewBrandDetails";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../ProductDetails/ProductDetails";



const router = createBrowserRouter([
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
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/mycart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch(` https://assignment-10-server-2x2ylpsyh-habibur-01.vercel.app/cart`)
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/viewbranddetails/:brand",
        element: <ViewBrandDetails></ViewBrandDetails>,
        loader: () => fetch(' https://assignment-10-server-2x2ylpsyh-habibur-01.vercel.app/addproduct')
      },
      {
        path: "/updateproduct/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(` https://assignment-10-server-2x2ylpsyh-habibur-01.vercel.app/addproduct/${params.id}`)
      },
      {
        path: "/productdetails/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params}) => fetch(` https://assignment-10-server-2x2ylpsyh-habibur-01.vercel.app/addproduct/${params.id}`)
      },
      

    ]
  },
]);



export default router;