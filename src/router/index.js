import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import DashboardHome from '../pages/dashboard/DashboardHome';
import RegisterPage from '../pages/RegisterPage';
import SignInPage from '../pages/SignInPage';
import Upload from '../pages/dashboard/Upload';
import AllReciepts from '../pages/dashboard/AllReciepts';


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
  {
    path: '/dashboard/upload_reciept',
    Component: Upload,
  },
  {
    path: '/dashboard/all_reciept',
    Component: AllReciepts,
  }
]);

export default router;
