import { FC } from 'react';
import { FaChartSimple } from 'react-icons/fa6';
import {
  FiLogOut,
  FiList,
  FiGrid,
} from 'react-icons/fi';
// import {useNavigate} from "react-router-dom"
const TABS = [
  { label: 'Dashboard', icon: FiGrid, href: '/Dashboard' },
  { label: 'Products', icon: FiList, href: '/sellerProducts' },
  { label: 'Analytics', icon: FaChartSimple, href: '/analytics' },
];

interface SidebarProps {
  onTabChange: (tab: string) => void;
}
// const navigate=useNavigate();

const Sidebar: FC<SidebarProps> = ({ onTabChange }) => {
  const currentPath = window.location.pathname;

  return (
    <div className="w-72 flex flex-col bg-white h-screen p-6 shadow-md justify-between sticky top-0">
      <div className='flex flex-col gap-10 items-start justify-start'>
        <h2 className="text-sm font-semibold text-primary-color mb-8">Made In Uganda Online Ltd</h2>
        <nav className="space-y-[1rem]">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentPath === tab.href;

            return (
              <a
                key={tab.label}
                href={tab.href}
                onClick={() => onTabChange(tab.label)}
                className={`flex items-center rounded-md px-10 py-2 ${
                  isActive
                    ? 'bg-primary-color text-white'
                    : 'text-gray-700 hover:bg-primary-color hover:text-white'
                }`}
              >
                <Icon className="mr-3 ml-[2rem]" />
                {tab.label}
              </a>
            );
          })}
        </nav>
      </div>
      <button className="flex items-center bg-red-600 text-white mt-8 w-full pl-[2rem] py-2 rounded-md" >
        <FiLogOut className="mr-3" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
