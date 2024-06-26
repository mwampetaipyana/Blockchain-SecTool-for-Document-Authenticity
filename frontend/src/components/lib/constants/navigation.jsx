import {
	HiOutlineViewGrid,
	HiOutlineDocumentText,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
    HiOutlineUserAdd,
	HiOutlineUpload,
	HiOutlineUser,
	HiOutlineDatabase
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/admin',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'register',
		label: 'Register',
		path: 'register',
		icon: <HiOutlineUserAdd />
	},
	{
		key: 'users',
		label: 'Users',
		path: 'users',
		icon: <HiOutlineUser/>
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: 'transactions',
		icon: <HiOutlineDatabase/>
	}
	
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]


export const PRO_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/pro',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'upload',
		label: 'Upload Document',
		path: 'upload',
		icon: <HiOutlineUpload/>
	},
	{
		key: 'documents',
		label: 'My Documents',
		path: 'documents',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'proTransaction',
		label: 'My Transactions',
		path: 'mytransactions',
		icon: <HiOutlineDatabase/>
	}
]