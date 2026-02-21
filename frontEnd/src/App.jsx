import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import AccountPage from './pages/AccountPage';

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
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
