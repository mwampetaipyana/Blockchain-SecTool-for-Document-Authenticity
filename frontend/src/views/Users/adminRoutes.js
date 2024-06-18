
import AdminDashboard from "../../components/AdminDashboard";
import Register from "../../components/Register"
import Transactions from "../../components/Transactions";
const adminRoutes = [
    {
        path: '/admin',
        component : AdminDashboard,
        meta: {requiresMetamask: true, requiresAdmin : true},
        children : [
            {
                path: '',
                name: 'Admin Dashboard',
                component: AdminDashboard
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            },
            {
                path: '/transactions',
                name: 'Transactions',
                component:Transactions
            }
        ]
    }
]

export default adminRoutes