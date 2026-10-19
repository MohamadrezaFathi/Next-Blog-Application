import Link from "next/link";
import {
  Squares2X2Icon,
  ChevronLeftIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";

async function CategoryList() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/category/list`);

  if (!res.ok) {
    throw new Error("دریافت دسته‌بندی‌ها با خطا مواجه شد.");
  }

  const result = await res.json();
  const categories = result?.data?.categories ?? [];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <Squares2X2Icon className="h-5 w-5" />
        </div>

        <div>
          <h2 className="font-bold text-slate-900">دسته‌بندی‌ها</h2>
          <p className="mt-1 text-xs text-slate-500">
            موضوع مورد علاقه‌ات را انتخاب کن
          </p>
        </div>
      </div>

      <div className="mb-4 h-px bg-slate-100" />

      {categories.length > 0 ? (
        <ul className="space-y-1.5">
          {categories.map((category) => (
            <li key={category._id}>
              <Link
                href={`/blogs/category/${category.slug}`}
                className="group flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <FolderIcon className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:text-indigo-600" />
                  <span className="truncate font-medium">
                    {category.title}
                  </span>
                </span>

                <ChevronLeftIcon className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:-translate-x-1 group-hover:text-indigo-600" />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-xl bg-slate-50 px-4 py-8 text-center">
          <FolderIcon className="mx-auto mb-3 h-8 w-8 text-slate-300" />
          <p className="text-sm text-slate-500">
            هنوز دسته‌بندی‌ای ثبت نشده است.
          </p>
        </div>
      )}
    </div>
  );
}

export default CategoryList;