
"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Suspense } from "react";

const navLinks = [
  { id: 1, children: "خانه", path: "/" },
  { id: 2, children: "بلاگ‌ها", path: "/blogs" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // فعلاً آزمایشی است؛ بعداً از AuthContext استفاده می‌کنیم.
  const user = false;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="M12 7C9.5 4.8 6.5 4.5 3 5.5V19c3.5-1 6.5-.7 9 1.5M12 7c2.5-2.2 5.5-2.5 9-1.5V19c-3.5-1-6.5-.7-9 1.5M12 7v13.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span className="text-xl font-black tracking-tight text-slate-900">
            وبلاگ<span className="text-indigo-600">‌یار</span>
          </span>
        </Link>

        {/* Desktop navigation */}
       <nav className="hidden items-center gap-2 md:flex">
  {navLinks.map((navLink) => (
    <Suspense
      key={navLink.id}
      fallback={
        <span className="inline-flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600">
          {navLink.children}
        </span>
      }
    >
      <NavLink path={navLink.path}>
        {navLink.children}
      </NavLink>
    </Suspense>
  ))}
</nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <Link
              href="/profile"
              className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              پنل کاربری
            </Link>
          ) : (
            <Link
              href="/signin"
              className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
            >
              ورود به حساب
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden sm:px-6">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
  {navLinks.map((navLink) => (
    <Suspense
      key={navLink.id}
      fallback={
        <span className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600">
          {navLink.children}
        </span>
      }
    >
      <NavLink
        path={navLink.path}
        onClick={closeMenu}
      >
        {navLink.children}
      </NavLink>
    </Suspense>
  ))}

  {/* ادامه کد ورود به حساب، بدون تغییر */}
</nav>
        </div>
      )}
    </header>
  );
}

export default Header;
