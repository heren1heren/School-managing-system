import { useAuth } from '../utilities/provider/authProvider';
import { ProtectedRoute } from './ProtectedRoute';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignInPage from './../components/pages/Sign-in-page.tsx';
import SignUpPage from './../components/pages/Sign-up-page.tsx';
import App from './../components/pages/App.tsx';

import CrudDashboard from './../components/pages/CrudDashboard';
import EmployeeList from './../components/elements/EmployeeList';
import EmployeeCreate from './../components/elements/EmployeeCreate';
import EmployeeShow from './../components/elements/EmployeeShow';
import EmployeeEdit from './../components/elements/EmployeeEdit';
const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const publicRoutes = [
    {
      path: '/service',
      element: <div>Service Page</div>
    },
    {
      path: '/about-us',
      element: <div>About Us</div>
    }
  ];

  // Define routes accessible only to authenticated users
  const authRoutes = [
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        { path: '/', element: <App /> },
        { path: '/profile', element: <div>User Profile</div> },
        { path: '/sign-out', element: <div> Sign out</div> },
        {
          path: '/crud',
          element: <CrudDashboard />,
          children: [
            { path: 'employees', element: <EmployeeList /> },
            { path: 'employees/new', element: <EmployeeCreate /> },
            { path: 'employees/:employeeId', element: <EmployeeShow /> },
            { path: 'employees/:employeeId/edit', element: <EmployeeEdit /> }
          ]
        }
      ]
    }
  ];
  // Define routes accessible only to non-authenticated users

  const guestRoutes = [
    { path: '/', element: <div>Home Page</div> },
    { path: '/sign-in', element: <SignInPage /> },
    { path: '/sign-up', element: <SignUpPage /> }
  ];
  const router = createBrowserRouter([
    ...publicRoutes,
    ...(token ? authRoutes : guestRoutes)
  ]);
  // Combine and conditionally include routes based on authentication status

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
