import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import AccountPage from './pages/AccountPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
  {
    path: "/prodotti",
    element: <ProductsPage />,
  },
  {
    path: "/carrello",
    element: <CartPage />
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
