
export const metadata = {
  title: {
    default: "حساب کاربری ",
    template: "%s",
  },
  description: "ورود یا ایجاد حساب کاربری در وبلاگ‌یار",
};

export default function AuthLayout({ children }) {
  return (
    <main className="relative flex min-h-[calc(100vh-5rem)]
      items-center justify-center overflow-hidden
      bg-slate-50 px-4 py-10 sm:px-6"
    >
      {/* پس‌زمینه تزئینی */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24
          h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24
          h-72 w-72 rounded-full bg-violet-200/40 blur-3xl"
      />

      <div className="relative w-full max-w-md">
        <div className="rounded-3xl border border-white
          bg-white/95 p-6 shadow-xl shadow-slate-200/60
          sm:p-9"
        >
          {children}
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          تجربه‌ای ساده‌تر برای کشف و مطالعه
        </p>
      </div>
    </main>
  );
}
