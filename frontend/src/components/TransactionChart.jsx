import React from 'react'
import { BarChart , CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

const data = [
    {
		name: 'Jan',
		Uploads: 4000,
		Verification: 2400
	},
	{
		name: 'Feb',
		Uploads: 3000,
		Verification: 1398
	},
	{
		name: 'Mar',
		Uploads: 2000,
		Verification: 9800
	},
	{
		name: 'Apr',
		Uploads: 2780,
		Verification: 3908
	},
	{
		name: 'May',
		Uploads: 1890,
		Verification: 4800
	},
	{
		name: 'Jun',
		Uploads: 2390,
		Verification: 3800
	},
	{
		name: 'July',
		Uploads: 3490,
		Verification: 4300
	},
	{
		name: 'Aug',
		Uploads: 2000,
		Verification: 9800
	},
	{
		name: 'Sep',
		Uploads: 2780,
		Verification: 3908
	},
	{
		name: 'Oct',
		Uploads: 1890,
		Verification: 4800
	},
	{
		name: 'Nov',
		Uploads: 2390,
		Verification: 3800
	},
	{
		name: 'Dec',
		Uploads: 3490,
		Verification: 4300
	}
]
const TransactionChart = () => {
  return (
		<div className="h-[22rem] bg-white p-4 rounded-sm w-3/4 border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Transactions</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				
					<BarChart
						width={1200}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Verification" fill="#0ea5e9" />
						<Bar dataKey="Uploads" fill="#ea580c" />
					</BarChart>
				
			</div>
		</div>
    
  )
}

export default TransactionChart
