import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../utilities/provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Logout from "../pages/Logout";
import Login from "../pages/Login";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  // Define routes accessible only to authenticated users
 const routesForAuthenticatedOnly = [
  {
    path: "/",
    element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
    children: [
      {
        path: "/",
        element: <div>User Home Page</div>,
      },
      {
        path: "/profile",
        element: <div>User Profile</div>,
      },
      {
        path: "/sign-out",
        element: <div>Sign Out</div>,
      },
    ],
  },
];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
  {
    path: "/",
    element: <div>Home Page</div>,n
  },
  {
    path: "/sign-in",
    element: <div> sign in</div>,
  },
];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;