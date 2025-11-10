import { createHashRouter, Navigate, RouterProvider } from "react-router";
import AppLayout from "./components/layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import Discounts from "./pages/Discounts";
import AddDiscount from "./pages/AddDiscount";
import Tags from "./pages/Tags";
import AddTag from "./pages/AddTag";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Categories from "./pages/Categories";
import AddCategory from "./pages/AddCategory";
import Users from "./pages/Users";
import AddAdmin from "./pages/AddAdmin";
import Orders from "./pages/Orders";
import Tickets from "./pages/Tickets";
import Comments from "./pages/Comments";
import Settings from "./pages/Settings";

const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      // Redirect root to dashboard
      { index: true, element: <Navigate to="dashboard" replace /> },

      // Dashboard
      { path: "dashboard", element: <Dashboard /> },

      // Discounts routes
      { path: "discounts", element: <Discounts /> },
      { path: "discounts/add", element: <AddDiscount /> },

      // Tags routes
      { path: "tags", element: <Tags /> },
      { path: "tags/add", element: <AddTag /> },

      // Products routes
      { path: "products", element: <Products /> },
      { path: "products/add", element: <AddProduct /> },

      // Categories routes
      { path: "categories", element: <Categories /> },
      { path: "categories/add", element: <AddCategory /> },

      // Users routes
      { path: "users", element: <Users /> },

      // Admins routes
      { path: "admins/add", element: <AddAdmin /> },

      // Orders
      { path: "orders", element: <Orders /> },

      // Support routes
      { path: "tickets", element: <Tickets /> },
      { path: "comments", element: <Comments /> },

      // Settings
      { path: "settings", element: <Settings /> },

      // Catch all route - 404
      { path: "*", element: <Navigate to="/dashboard" replace /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
