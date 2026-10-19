import { Suspense } from "react";
import CategoryList from "../_components/CategoryList";
import Loading from "../loading";

export const metadata = {
  title: "بلاگ‌ها",
};

export default function BlogsLayout({ children }) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <header className="mb-8">
          <span className="mb-3 inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
            دنیای ایده‌ها
          </span>

          <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            بلاگ‌ها
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            مطالب مورد علاقه‌ات را پیدا کن، ایده‌های تازه یاد بگیر و با دنیای
            دانش همراه شو.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <aside className="min-w-0 lg:col-span-3">
            <Suspense fallback={<Loading type="categories" />}>
              <CategoryList />
            </Suspense>
          </aside>

          <section className="min-w-0 lg:col-span-9">
            {children}
          </section>
        </div>
      </div>
    </main>
  );
}