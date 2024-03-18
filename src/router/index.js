import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import DashboardHome from '../pages/dashboard/DashboardHome';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/dashboard',
    Component: DashboardHome,
  },
]);

export default router;
