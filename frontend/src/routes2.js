import { createBrowserRouter, RouterProvider, Route, Navigate, Outlet } from 'react-router-dom';
import LawEnforcementLayoutView from "@/views/Users/Layout.vue"; // Assuming Vue components
import CasesView from "./Cases/Cases.vue";
import DashboardView from "./Dashboard.vue";
import NotificationsView from "./Notifications.vue";
import UsersView from "@/views/Admin/Users/Users.vue";



// Custom PrivateRoute component for permission checks
const PrivateRoute = ({ children, requiresMetaMask, redirectPath = '/login' }) => {
  if (requiresMetaMask && !isMetaMaskConnected()) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
};

const router = createBrowserRouter([
  {
    path: '/user',
    element: (
      <PrivateRoute requiresMetaMask>
        <LawEnforcementLayoutView />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <DashboardView />,
      },
      {
        path: '/cases',
        element: <CasesView />,
      },
      {
        path: '/registered_users',
        element: <UsersView />,
      },
      {
        path: '/notifications',
        element: <NotificationsView />,
      },
    ],
  },
  // Add other top-level routes here (if any)
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
