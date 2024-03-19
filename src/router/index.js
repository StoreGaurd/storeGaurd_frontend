import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import DashboardHome from '../pages/dashboard/DashboardHome';
import RegisterPage from '../pages/RegisterPage';
import SignInPage from '../pages/SignInPage';


const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/register',
    Component: RegisterPage,
  },
  {
    path: '/signin',
    Component: SignInPage,
  },
  {
    path: '/dashboard',
    Component: DashboardHome,
  },
]);

export default router;
