"use client";

import { useAuth } from "@/context/AuthContext";
import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import SideBarNavs from "./SideBarNavs";

function SideBar() {
  const { logout } = useAuth();

  const logoutHandler = async () => {
    await logout;
  };

  return (
    <div className="overflow-y-auto flex flex-col p-5 h-screen pt-10 lg:pt-8">
      {/* Drawer header */}
      <Link href="/" className="flex items-center gap-4">
        <HomeIcon className="w-6 h-6" />
        <span>وبلاگ یار</span>
      </Link>
      {/* Drawer content */}
      <div className="overflow-y-auto flex-auto">
        <SideBarNavs />
        <div
          onClick={logoutHandler}
          className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700 py-3 px-4 hover:text-red-400 cursor-pointer"
        >
          <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
