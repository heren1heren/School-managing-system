import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import AppTheme from "./theme/AppTheme";
import CssBaseline from '@mui/material/CssBaseline';



import SignUpPage from "./components/pages/Sign-up-page";
import SignInPage from "./components/pages/Sign-in-page";
import App from "./components/pages/App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Sign-In",
    element: <SignInPage />,
  },
  {
    path: "Sign-Up",
    element: <SignUpPage />,
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <AppTheme >
        <CssBaseline enableColorScheme />
        <RouterProvider router={router} />
      </AppTheme>

    </StyledEngineProvider>
  </StrictMode>
);
