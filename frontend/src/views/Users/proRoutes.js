
import ProDashboard from "../../components/ProDashboard";
import UploadDoc  from "../../components/UploadDoc"
import Documents from "../../components/Documents";
const adminRoutes = [
    {
        path: '/admin',
        component : ProDashboard,
        meta: {requiresMetamask: true, requiresAdmin : true},
        children : [
            {
                path: '',
                name: 'Admin Dashboard',
                component: ProDashboard
            },
            {
                path: '/upload',
                name: 'Upload',
                component: UploadDoc
            },
            {
                path: '/documents',
                name: 'Documents',
                component: Documents
            }
        ]
    }
]

export default adminRoutes