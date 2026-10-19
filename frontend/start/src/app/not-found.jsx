
import Link from "next/link";
import Button from "@/ui/Button";

export const metadata = {
  title: "صفحه پیدا نشد",
  description: "صفحه‌ای که دنبالش هستید پیدا نشد.",
};

export default function NotFound() {
  return (
    <main
      dir="rtl"
      className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 px-4 py-16 sm:px-6"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />

      <section className="relative mx-auto w-full max-w-2xl text-center">
        {/* 404 Illustration */}
        <div className="relative mx-auto mb-8 flex h-40 w-64 max-w-full items-center justify-center sm:h-52 sm:w-80">
          <span className="select-none text-[100px] font-black leading-none tracking-tighter text-indigo-100 sm:text-[140px]">
            404
          </span>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white bg-white/90 text-indigo-600 shadow-xl shadow-indigo-900/10 ring-1 ring-indigo-100 sm:h-24 sm:w-24">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-10 w-10 sm:h-12 sm:w-12"
                aria-hidden="true"
              >
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="m15.5 15.5 4 4M8 10.5h5M10.5 8v5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <span className="absolute right-5 top-4 h-3 w-3 rounded-full bg-violet-400 sm:right-8 sm:top-6" />
          <span className="absolute bottom-5 left-6 h-2.5 w-2.5 rounded-full bg-sky-400 sm:bottom-7 sm:left-10" />
        </div>

        {/* Content */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-indigo-500" />
          خطای ۴۰۴
        </div>

        <h1 className="text-2xl font-black leading-relaxed tracking-tight text-slate-900 sm:text-4xl">
          اوه! این صفحه پیدا نشد.
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-8 text-slate-500 sm:text-base">
          به نظر می‌رسد صفحه‌ای که دنبالش هستی وجود ندارد، حذف شده یا آدرس
          آن را اشتباه وارد کرده‌ای. بیا به یک مسیر آشنا برگردیم.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" className="w-full sm:w-auto">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="m10 19-7-7 7-7M3 12h18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            بازگشت به صفحه اصلی
          </Button>

          <Button
            href="/blogs"
            variant="outline"
            className="w-full sm:w-auto"
          >
            مطالعه بلاگ‌ها
          </Button>
        </div>

        <div className="mx-auto mt-10 h-px max-w-xs bg-gradient-to-l from-transparent via-slate-200 to-transparent" />

        <p className="mt-5 text-xs text-slate-400 sm:text-sm">
          وبلاگ‌یار؛ جایی برای ایده‌های تو.
        </p>
      </section>
    </main>
  );
}
