"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";
import { BsHouseDoor } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdAdminPanelSettings } from "react-icons/md";
import { PiPackageLight, PiUserCheckLight } from "react-icons/pi";
import { RiLogoutCircleLine } from "react-icons/ri";

interface SidebarProps {
  isSidebarOpen: boolean;
}

type MenuItem = {
  id: string;
  name: string;
  icon: React.ReactNode;
  subMenu?: string[];
};

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Dashboard",
    icon: <BsHouseDoor className="w-5 h-5 text-gray-500" />,
  },
  {
    id: "2",
    name: "Customer",
    icon: <HiOutlineUserGroup className="w-5 h-5 text-gray-500" />,
  },
  {
    id: "3",
    name: "Package",
    icon: <PiPackageLight className="w-5 h-5 text-gray-500" />,
  },
  {
    id: "4",
    name: "Request Legality",
    icon: <CiTimer className="w-5 h-5 text-gray-500" />,
    subMenu: ["Need Review", "On Progress"],
  },
  {
    id: "5",
    name: "Client List",
    icon: <PiUserCheckLight className="w-5 h-5 text-gray-500" />,
  },
  {
    id: "6",
    name: "Admin",
    icon: <MdAdminPanelSettings className="w-5 h-5 text-gray-500" />,
  },
  {
    id: "7",
    name: "Logout",
    icon: <RiLogoutCircleLine className="w-5 h-5 text-gray-500" />,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<string[]>([]);

  useEffect(() => {
    const menu = menuItems.filter((item) => item.subMenu).map((item) => item.id);
    setIsSubMenuOpen(menu);
  }, []);

  console.log(isSubMenuOpen);

  const toggleMenuItem = (id: string) => {
    if (isSubMenuOpen.includes(id)) {
      setIsSubMenuOpen(isSubMenuOpen.filter((menuId) => menuId !== id));
    } else {
      setIsSubMenuOpen([...isSubMenuOpen, id]);
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-16 bg-white border-r border-gray-200 sm:translate-x-0 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto lg:overflow-hidden lg:hover:overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300">
        <ul className="space-y-1 font-medium text-black">
          {menuItems.map((item, index) => (
            <li className="py-1" key={index}>
              <button className="flex items-center justify-between py-2 w-full focus:outline-none group" onClick={() => toggleMenuItem(item.id)}>
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-[#999999] text-sm">{item.name}</span>
                </div>
                {item.subMenu &&
                  (isSubMenuOpen.includes(item.id) ? (
                    <ChevronUpIcon className="w-5 h-5 hover:text-blue-500" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 hover:text-blue-500" />
                  ))}
              </button>
              {isSubMenuOpen.includes(item.id) && item.subMenu && (
                <ul className="my-2 space-y-4 pl-7 text-[13px]">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="text-[#333333] hover:text-blue-500">
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
