
import Link from "next/link";
import Button from "@/ui/Button";

export const metadata={
title:"خانه"
}

const features = [
  {
    icon: "✦",
    title: "مدیریت متمرکز",
    description:
      "مطالب و محتوای خودت را در یک فضای منظم مدیریت کن.",
  },
  {
    icon: "▣",
    title: "تجربه واکنش‌گرا",
    description:
      "از موبایل، تبلت یا دسکتاپ به‌راحتی به پروژه دسترسی داشته باش.",
  },
  {
    icon: "♡",
    title: "تعامل با محتوا",
    description:
      "برای ساختن تجربه‌ای بهتر، قابلیت‌های تعاملی بلاگ را دنبال کن.",
  },
  {
    icon: "↗",
    title: "ساده و کاربردی",
    description:
      "بدون پیچیدگی اضافه، روی تولید و مدیریت محتوا تمرکز کن.",
  },
];

function DashboardPreview() {
  return (
    <div
      dir="ltr"
      aria-label="پیش‌نمایش تصویری پنل مدیریت بلاگ"
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="absolute -left-5 top-12 h-32 w-32 rounded-full bg-indigo-300/30 blur-3xl sm:-left-10 sm:h-48 sm:w-48" />
      <div className="absolute -right-4 bottom-4 h-36 w-36 rounded-full bg-sky-300/30 blur-3xl sm:-right-8 sm:h-48 sm:w-48" />

      <div className="relative rounded-3xl border border-white/80 bg-white/80 p-2.5 shadow-2xl shadow-indigo-950/10 ring-1 ring-slate-900/5 backdrop-blur-xl sm:p-4">
        {/* Browser header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-2 pb-3 sm:px-3 sm:pb-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>

          <span className="text-[10px] font-medium text-slate-400 sm:text-xs">
            BLOG DASHBOARD
          </span>

          <div className="h-2 w-10 rounded-full bg-slate-100 sm:w-14" />
        </div>

        <div className="grid grid-cols-[65px_minmax(0,1fr)] gap-3 py-4 sm:grid-cols-[105px_minmax(0,1fr)] sm:gap-5 sm:py-6">
          {/* Sidebar illustration */}
          <aside className="space-y-4 border-r border-slate-100 pr-2 sm:space-y-5 sm:pr-3">
            <div className="mb-5 flex items-center gap-1.5 sm:mb-7 sm:gap-2">
              <span className="h-5 w-5 rounded-md bg-indigo-600 sm:h-7 sm:w-7" />
              <span className="hidden h-2 w-9 rounded-full bg-slate-200 sm:block" />
            </div>

            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={item}
                className={`flex items-center gap-1.5 rounded-lg p-1.5 sm:gap-2 sm:p-2 ${
                  index === 1 ? "bg-indigo-50" : ""
                }`}
              >
                <span
                  className={`h-3 w-3 shrink-0 rounded ${
                    index === 1 ? "bg-indigo-500" : "bg-slate-200"
                  }`}
                />
                <span
                  className={`h-1.5 flex-1 rounded-full ${
                    index === 1 ? "bg-indigo-200" : "bg-slate-100"
                  }`}
                />
              </div>
            ))}
          </aside>

          {/* Dashboard content illustration */}
          <div className="min-w-0 space-y-4 sm:space-y-5">
            <div>
              <div className="h-3 w-28 rounded-full bg-slate-800 sm:h-4 sm:w-36" />
              <div className="mt-2 h-2 w-40 max-w-full rounded-full bg-slate-200" />
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <div className="rounded-xl border border-slate-100 bg-white p-3 sm:rounded-2xl sm:p-4">
                <div className="h-6 w-6 rounded-lg bg-indigo-100 sm:h-8 sm:w-8" />
                <div className="mt-3 h-2 w-12 rounded-full bg-slate-200" />
                <div className="mt-2 h-5 w-10 rounded-md bg-indigo-600/90 sm:h-7 sm:w-14" />
              </div>

              <div className="rounded-xl border border-slate-100 bg-white p-3 sm:rounded-2xl sm:p-4">
                <div className="h-6 w-6 rounded-lg bg-sky-100 sm:h-8 sm:w-8" />
                <div className="mt-3 h-2 w-12 rounded-full bg-slate-200" />
                <div className="mt-2 h-5 w-10 rounded-md bg-sky-500/80 sm:h-7 sm:w-14" />
              </div>
            </div>

            <div className="rounded-xl border border-slate-100 bg-white p-3 sm:rounded-2xl sm:p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="h-2.5 w-20 rounded-full bg-slate-300" />
                <div className="h-5 w-12 rounded-md bg-indigo-50" />
              </div>

              <div className="flex h-20 items-end justify-between gap-2 sm:h-28 sm:gap-3">
                {[35, 55, 42, 78, 58, 92, 68, 80, 48, 72].map(
                  (height, index) => (
                    <div
                      key={index}
                      style={{ height: `${height}%` }}
                      className={`min-w-0 flex-1 rounded-t-md ${
                        index === 5
                          ? "bg-indigo-600"
                          : "bg-indigo-100"
                      }`}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Floating decoration */}
        <div className="absolute -right-2 top-24 flex items-center gap-2 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl shadow-slate-900/5 sm:-right-5 sm:top-28 sm:p-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-lg text-emerald-600">
            ✓
          </span>
          <div>
            <p className="text-xs font-bold text-slate-800 sm:text-sm">
              آماده برای شروع
            </p>
            <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
              فضای مدیریت محتوای تو
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative isolate bg-gradient-to-b from-indigo-50/80 via-white to-slate-50">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-32 -top-24 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          {/* Hero content */}
          <div className="relative z-10 text-center lg:text-right">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              فضای اختصاصی مدیریت بلاگ
            </div>

            <h1 className="text-4xl font-black leading-[1.5] tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.4] lg:text-6xl">
              ایده‌هایت را
              <br />
              به یک بلاگ{" "}
              <span className="bg-gradient-to-l from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                جذاب
              </span>{" "}
              تبدیل کن.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-slate-600 sm:text-base sm:leading-9 lg:mx-0">
              یک فضای ساده و مدرن برای مدیریت محتوا، انتشار بلاگ و تعامل با
              خوانندگان؛ همه‌چیز در یک پنل منظم و کاربردی.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button
                href="/blogs"
                className="w-full sm:w-auto"
              >
                مطالعه بلاگ‌ها
                <span aria-hidden="true">←</span>
              </Button>

              <Button
                href="/profile"
                variant="outline"
                className="w-full sm:w-auto"
              >
                مدیریت بلاگ‌ها
                <span aria-hidden="true">↗</span>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-slate-500 sm:text-sm lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                رابط کاربری ساده
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                طراحی واکنش‌گرا
              </span>
            </div>
          </div>

          {/* Dashboard visual */}
          <DashboardPreview />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="text-sm font-bold text-indigo-600">
            امکانات پلتفرم
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            همه‌چیز برای مدیریت بهتر محتوا
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            امکانات کاربردی در کنار طراحی ساده، برای یک تجربه بهتر.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/5 sm:p-7"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-bold transition duration-300 group-hover:scale-105 ${
                  index % 2 === 0
                    ? "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
                    : "bg-sky-50 text-sky-600 group-hover:bg-sky-500 group-hover:text-white"
                }`}
              >
                {feature.icon}
              </div>

              <h3 className="mt-5 text-base font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-900 px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
          <div className="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 right-1/3 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-7 text-center md:flex-row md:text-right">
            <div>
              <h2 className="text-2xl font-black leading-relaxed text-white sm:text-3xl">
                آماده‌ای شروع کنی؟
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">
                بلاگ‌ها را ببین و فضای مدیریت محتوایت را کشف کن.
              </p>
            </div>

            <Link
              href="/blogs"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-indigo-700 transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              شروع بازدید
              <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:px-6 sm:text-right lg:px-8">
          <Link href="/" className="font-black text-slate-800">
            وبلاگ<span className="text-indigo-600">‌یار</span>
          </Link>

          <p className="text-xs text-slate-500 sm:text-sm">
            فضایی برای مدیریت و انتشار محتوای تو.
          </p>
        </div>
      </footer>
    </main>
  );
}
