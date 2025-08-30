import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import AppTheme from "./utilities/theme/AppTheme";
import CssBaseline from '@mui/material/CssBaseline';
import { ErrorBoundary } from 'react-error-boundary';
// import EmployeeList from "./components/elements/EmployeeList";
// import EmployeeShow from "./components/elements/EmployeeShow";
// import EmployeeCreate from "./components/elements/EmployeeCreate";
// import EmployeeEdit from "./components/elements/EmployeeEdit";
// import DashboardLayout from "./components/elements/DashboardLayout";
import formInputCustomizations from './utilities/theme/customizations/formInput.tsx';

import sidebarCustomizations from './utilities/theme/customizations/sidebar.tsx';

import dataGridCustomizations from './utilities/theme/customizations/dataGrid.ts';
import datePickersCustomizations from './utilities/theme/customizations/datePickers.ts';

// import SignUpPage from "./components/pages/Sign-up-page";
// import SignInPage from "./components/pages/Sign-in-page";
// import App from "./components/pages/App";
// import CrudDashboard from "./components/pages/CrudDashboard";
import AuthProvider from "./utilities/provider/authProvider.tsx";
import Routes from './routes/index.tsx'

// const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   { path: "Sign-In", element: <SignInPage /> },
//   { path: "Sign-Up", element: <SignUpPage /> },
//   {
//     path: "crud/",
//     element: <CrudDashboard />,
//     children: [
//       { path: "employees", element: <EmployeeList /> },
//       { path: "employees/new", element: <EmployeeCreate /> },
//       { path: "employees/:employeeId", element: <EmployeeShow /> },
//       { path: "employees/:employeeId/edit", element: <EmployeeEdit /> },
//       { path: "*", element: <EmployeeList /> } // fallback
//     ]
//   }
// ]);

// export default router;

const themeComponents = {
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...sidebarCustomizations,
  ...formInputCustomizations,
};

function GlobalErrorFallback({ error }: { error: Error }) {
  return (
    <div style={{ padding: '2rem', color: 'red' }}>
      <h2>Something went wrong</h2>
      <pre>{error.message}</pre>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <AppTheme themeComponents={themeComponents}>
        <CssBaseline enableColorScheme />
        <AuthProvider>

          <RouterProvider router={Routes} />
        </AuthProvider>

      </AppTheme>

    </StyledEngineProvider>
  </StrictMode>
);
