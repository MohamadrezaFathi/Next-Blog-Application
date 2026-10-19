import Link from "next/link";
import Image from "next/image";
import {
  BookOpenIcon,
  ArrowLeftIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import PostContent from "./PostContent";
import { toPersianDigits } from "@/utils/numberFormatter";

async function PostList() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/post/list`);

  if (!res.ok) {
    throw new Error("دریافت پست‌ها با خطا مواجه شد.");
  }

  const result = await res.json();
  const posts = result?.data?.posts ?? [];

  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
          <DocumentTextIcon className="h-8 w-8" />
        </div>

        <h2 className="text-lg font-bold text-slate-900">
          هنوز پستی منتشر نشده است
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          به‌زودی مطالب جدیدی در این بخش قرار می‌گیرند.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-extrabold text-slate-900 sm:text-xl">
            تازه‌ترین مطالب
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            مطالبی برای یادگیری و الهام گرفتن
          </p>
        </div>

        <div className="hidden items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm text-slate-500 ring-1 ring-slate-200 sm:flex">
          <BookOpenIcon className="h-4 w-4" />
          <span>{toPersianDigits(posts.length)} مطلب</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blogs/${post.slug}`}
            className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/5"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              {post.coverImageUrl ? (
                <Image
                  src={post.coverImageUrl}
                  alt={post.title}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-slate-300">
                  <DocumentTextIcon className="h-12 w-12" />
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />

              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-2.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                <BookOpenIcon className="h-4 w-4 text-indigo-600" />
                {toPersianDigits(post.readingTime ?? "—")} دقیقه مطالعه
              </span>
            </div>

            <PostContent post={post} />

            <div className="mt-auto flex items-center justify-between border-t border-slate-100 px-5 py-4">
              <span className="text-xs font-medium text-slate-400">
                مطالعه‌ی مطلب
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                <ArrowLeftIcon className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PostList;