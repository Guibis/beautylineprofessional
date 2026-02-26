import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import AccountPage from './pages/AccountPage';
import ProductsPage from './pages/ProductsPage';

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
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
