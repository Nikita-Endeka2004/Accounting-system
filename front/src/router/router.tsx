import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorsPage from "../pages/ErrorsPage";
import Home from "../pages/Home";
import Wallets, { walletAction, walletLoader } from "../pages/Wallets";
import Categories, { categoriesAction, categoryLoader } from "../pages/Categories";
import Auth from "../pages/Auth";
import { ProtectedRoute } from "../components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorsPage />,
    children: [
      {
        index: true,
        element: <Home />,
        
      },
      {
        path: 'wallets',
        loader: walletLoader,
        action: walletAction,
        element: <ProtectedRoute><Wallets /></ProtectedRoute>
      },
      {
        path: 'categories',
        action: categoriesAction,
        loader: categoryLoader,
        element: <ProtectedRoute><Categories /></ProtectedRoute>
      },
      {
        path: 'auth',
        element: <Auth />
      }
    ]
  }
])