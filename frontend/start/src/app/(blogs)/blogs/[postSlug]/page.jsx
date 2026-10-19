
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRightIcon,
  ClockIcon,
  ChatBubbleLeftIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import getPostBySlug from "@/services/postServices";


export async function generateMetadata({ params }) {
  const { postSlug } = await params;
  const post = await getPostBySlug(postSlug);

  if (!post) {
    return {
      title: "مقاله پیدا نشد ",
    };
  }

  return {
    title: `${post.title}`,
  };
}

async function SinglePostPage({ params }) {
  const { postSlug } = await params;
  const post = await getPostBySlug(postSlug);

  if (!post) {
    notFound();
  }


  const authorName = post.author?.name || "نویسنده وبلاگ‌یار";
  const avatarUrl = post.author?.avatarUrl;

  return (
    <main className="min-h-screen bg-slate-50/70">
      <article className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

        {/* مسیر بازگشت */}
        <nav className="mb-8">
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 rounded-xl
              text-sm font-medium text-slate-500 transition-colors
              hover:text-indigo-600"
          >
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            بازگشت به بلاگ‌ها
          </Link>
        </nav>

        {/* سربرگ مقاله */}
        <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full
            border border-indigo-100 bg-indigo-50 px-4 py-2
            text-xs font-semibold text-indigo-700 sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            دنیای دانستنی‌ها
          </div>

          <h1 className="text-2xl font-extrabold leading-[1.8]
            tracking-tight text-slate-900 sm:text-3xl
            md:text-4xl lg:text-[2.6rem]"
          >
            {post.title}
          </h1>

          {post.briefText && (
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8
              text-slate-500 sm:text-base sm:leading-9"
            >
              {post.briefText}
            </p>
          )}

          {/* اطلاعات نویسنده و مقاله */}
          <div className="mt-7 flex flex-wrap items-center justify-center
            gap-x-5 gap-y-4 border-y border-slate-200/80 py-5"
          >
            <div className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 shrink-0
                items-center justify-center overflow-hidden rounded-full
                border border-slate-200 bg-indigo-50"
              >
                {avatarUrl ? (
                  <Image
                    src={avatarUrl}
                    alt={authorName}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-lg font-bold text-indigo-600">
                    {authorName.charAt(0)}
                  </span>
                )}
              </div>

              <div className="text-right">
                <p className="text-xs text-slate-400">نوشته‌شده توسط</p>
                <p className="mt-1 text-sm font-bold text-slate-700">
                  {authorName}
                </p>
              </div>
            </div>

            {post.readingTime != null && (
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <ClockIcon className="h-4 w-4 text-indigo-500" />
                <span>{post.readingTime} دقیقه مطالعه</span>
              </div>
            )}

            {post.commentCount != null && (
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <ChatBubbleLeftIcon className="h-4 w-4 text-indigo-500" />
                <span>{post.commentCount} دیدگاه</span>
              </div>
            )}
          </div>
        </header>

        {/* تصویر اصلی مقاله */}
        {post.coverImageUrl && (
          <div className="relative mb-10 aspect-[16/9] overflow-hidden
            rounded-2xl bg-slate-200 shadow-lg shadow-slate-200/60
            sm:mb-14 sm:rounded-3xl"
          >
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 960px"
              className="object-cover"
            />
          </div>
        )}

        {/* متن مقاله */}
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-slate-100
            bg-white px-5 py-7 shadow-sm sm:px-9 sm:py-10 md:px-12"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="h-8 w-1.5 rounded-full bg-indigo-500" />
              <h2 className="text-lg font-bold text-slate-800 sm:text-xl">
                درباره این مقاله
              </h2>
            </div>

            <div className="whitespace-pre-line break-words text-justify
              text-sm leading-9 text-slate-600
              sm:text-base sm:leading-[2.6]"
            >
              {post.text}
            </div>

            {/* محل توسعه قابلیت‌های آینده */}
            <div className="mt-10 border-t border-slate-100 pt-6">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 rounded-xl
                  bg-indigo-50 px-4 py-3 text-sm font-semibold
                  text-indigo-700 transition-colors
                  hover:bg-indigo-100"
              >
                <ArrowRightIcon className="h-4 w-4" />
                مشاهده سایر مقاله‌ها
              </Link>
            </div>
          </div>
        </div>

        {/* در آینده: کامنت‌ها و پست‌های مرتبط */}

      </article>
    </main>
  );
}

export default SinglePostPage;
