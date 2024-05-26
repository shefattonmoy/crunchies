import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";
import AddProducts from "../pages/AddProducts";
import EditProducts from "../pages/EditProducts";
import Register from "../pages/Register";
import DeleteProducts from "../pages/DeleteProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/foods"),
      },
      {
        path: "/products/:id/delete",
        element: <DeleteProducts></DeleteProducts>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foods/${params.id}`),
      },

      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foods/${params.id}`),
      },
      {
        path: "/about",
        element: <About></About>,
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
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "home",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts></AllProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "add-products",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "all-products/edit/:id",
        element: (
          <PrivateRoute>
            <EditProducts></EditProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foods/${params.id}`),
      },
    ],
  },
]);