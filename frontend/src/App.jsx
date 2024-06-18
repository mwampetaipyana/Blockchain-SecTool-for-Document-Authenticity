import "./App.css";
//import { Routes, Route } from 'react-router-dom';
// Removed unused import
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
//Route,
import Register from "./components/Register";
import Transactions from "./components/Transactions";
import AdminDashboard from "./components/AdminDashboard";
import Home from "./components/views/Home";
import AdminLayout from "./components/shared/AdminLayout";
import ProDashboard from "./components/ProDashboard";
import UploadDoc from "./components/UploadDoc";
import ProLayout from "./components/shared/ProLayout";
import Verify from "./components/Verify";
import Documents from "./components/Documents";
import { notifyError } from "./services/notificationServices";
// Function to check MetaMask connection for protected routes (replace with your actual logic)
const isConnected = () => {
  if (localStorage.getItem("role")) {
    return true;
  }
};
const isAdmin = () => {
  if (localStorage.getItem("role") == "admin") {
    return true;
  }
};
const isPro = () => {
  if (localStorage.getItem("role") == "pro") {
    return true;
  }
};

const PrivateRoute = ({
  children,
  requiresMetaMask,
  requiresAdmin,
  requiresPro,
  redirectPath = "/",
}) => {
  if (requiresMetaMask && !isConnected()) {
    notifyError("Connect Metamask")
    return <Navigate to={redirectPath} replace />;
  }

  if (requiresAdmin && !isAdmin()) {
    notifyError("Not Authorized!")
    return <Navigate to={redirectPath} replace />; // Redirect if admin access required
  }else{
    console.log(localStorage.getItem("role"));
  }

  if (requiresPro && !isPro()) {
    notifyError("Not Authorized!")
    return <Navigate to={redirectPath} replace />; // Redirect if pro access required
  }

  return children || <Outlet />;
};

//const AdminRoute = ({}=>{};)
const AdminRoute = ({ children }) => {
  return (
    <PrivateRoute requiresAdmin requiresMetaMask redirectPath="/">
      {children}
    </PrivateRoute>
  );
};

const ProRoute = ({ children }) => {
  return (
    <PrivateRoute requiresPro requiresMetaMask redirectPath="/">
      {children}
    </PrivateRoute>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/admin",
    element: (
      <AdminRoute requiresMetaMask>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: <AdminDashboard />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
    ],
  },
  {
    path: "/pro",
    element: (
      <ProRoute requiresMetaMask>
        <ProLayout />
      </ProRoute>
    ),
    children: [
      {
        path: "",
        element: <ProDashboard />,
      },
      {
        path: "upload",
        element: <UploadDoc />,
      },
      {
        path: "documents",
        element: <Documents />,
      },
    ],
  },
]);

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path='/admin' element={<AdminLayout/>}>
//           <Route index element={<AdminDashboard/>}/>
//           <Route path='register' element={<Register/>}/>
//           <Route path='transactions' element={<Transactions/>}/>
//         </Route>

//         <Route path='/pro' element={<ProLayout/>}>
//           <Route index element={<ProDashboard/>}/>
//           <Route path='upload' element={<UploadDoc/>}/>
//           <Route path='documents' element={<Documents/>}/>

//         </Route>

//         <Route path='/' element={<Home/>}/>
//         <Route path='verify' element={<Verify/>}/>
//       </Routes>
//     </div>
//   );
// }

function App() {
  return <RouterProvider router={router} />;
}

export default App;
