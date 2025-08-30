


import DashboardLayout from './../elements/DashboardLayout.tsx';
// import { createHashRouter } from 'react-router'; 
// import EmployeeList from './../elements/EmployeeList.tsx';
// import EmployeeShow from './../elements/EmployeeShow.tsx';


// import EmployeeCreate from './../elements/EmployeeCreate.tsx';
// import EmployeeEdit from './../elements/EmployeeEdit.tsx';
import DialogsProvider from './../../utilities/hooks/useDialogs/DialogsProvider.tsx';
import NotificationsProvider from './../../utilities/hooks/useNotifications/NotificationsProvider.tsx';
// import AppTheme from './../../utilities/theme/AppTheme.tsx';


// const DashboardRouter = createHashRouter([
//     {
//         Component: DashboardLayout,
//         children: [
//             {
//                 path: '/employees',
//                 Component: EmployeeList,
//             },
//             {
//                 path: '/employees/:employeeId',
//                 Component: EmployeeShow,
//             },
//             {
//                 path: '/employees/new',
//                 Component: EmployeeCreate,
//             },
//             {
//                 path: '/employees/:employeeId/edit',
//                 Component: EmployeeEdit,
//             },
//             // Fallback route for the example routes in dashboard sidebar items
//             {
//                 path: '*',
//                 Component: EmployeeList,
//             },
//         ],
//     },
// ]);



export default function CrudDashboard() {
    return (

        <NotificationsProvider>
            <DialogsProvider>
                <DashboardLayout />
            </DialogsProvider>
        </NotificationsProvider>

    );
}
