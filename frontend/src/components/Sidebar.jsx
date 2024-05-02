import React from 'react';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from './lib/constants/navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { HiOutlineLogout } from 'react-icons/hi';
import { TbBusinessplan } from 'react-icons/tb';
const linkClasses = 'flex items-center gap-2 font-light text-white px-3 py-2 hover:bg-[#2C74B3] hover:no-underline focus:bg-[#2C74B3] rounded-sm text-base'

const Sidebar = () => {
  return (
    <div className='bg-[#083344] w-60 p-3 flex flex-col text-white'>
      <div className='flex items-center gap-2 px-1 py-3 '>
      <Link to="/" className="flex justify-between no-underline items-center text-xl text-white space-x-1">
        <span>SecTool</span>
        <TbBusinessplan />
      </Link>
      </div>
      <div className='flex-1 py-8 flex flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>

      <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div className={classNames('text-red-500 cursor-pointer', linkClasses) }>
            <span className='text-xl'><HiOutlineLogout/></span>
            <Link to="/" className='text-red-500 no-underline'> Logout</Link>
            
        </div>

      </div>
    </div>
  );
}

export default Sidebar;


function SidebarLink({ item }) {
  const {pathname} =useLocation()
return (
  <Link to={item.path} className={classNames(pathname === item.path ? 'bg-neutral-700 text-white' :'text-neutral-400',linkClasses) }>
    <span className='text-xl'>{item.icon}</span>
    {item.label}
  </Link>
);
}