
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ path, children, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`
        relative inline-flex items-center rounded-xl px-4 py-2.5
        text-sm font-medium transition-all duration-200
        ${
          isActive
            ? "bg-indigo-50 text-indigo-700"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }
      `}
    >
      {children}
      {isActive && (
        <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-indigo-600" />
      )}
    </Link>
  );
}

export default NavLink;
