"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  BookmarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import { toPersianDigits } from "@/utils/numberFormatter";
import {
  bookmarkPostApi,
  likePostApi,
} from "@/services/postServices";

function PostContent({ post }) {
  const author = post.author;
  const router = useRouter();

  const [isLiking, setIsLiking] = useState(false);
  const [isBookmarking, setIsBookmarking] = useState(false);

  const likeHandler = async () => {
    if (isLiking) return;

    setIsLiking(true);

    try {
      const { message } = await likePostApi(post._id);

      toast.success(message || "وضعیت لایک با موفقیت تغییر کرد.");

      router.refresh();
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "تغییر وضعیت لایک با خطا مواجه شد."
      );
    } finally {
      setIsLiking(false);
    }
  };

  const bookmarkHandler = async () => {
    if (isBookmarking) return;

    setIsBookmarking(true);

    try {
      const { message } = await bookmarkPostApi(post._id);

      toast.success(message || "وضعیت بوکمارک با موفقیت تغییر کرد.");

      router.refresh();
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "تغییر وضعیت بوکمارک با خطا مواجه شد."
      );
    } finally {
      setIsBookmarking(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-5">
      <h3 className="line-clamp-2 min-h-[1.5rem] text-base font-extrabold leading-7 text-slate-900 transition group-hover:text-indigo-700">
        {post.title}
      </h3>

      {/* اطلاعات نویسنده */}
      <div className="flex min-w-0 items-center gap-2.5">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-slate-100 ring-2 ring-slate-100">
          {author?.avatarUrl ? (
            <Image
              src={author.avatarUrl}
              alt={author.name || "نویسنده"}
              fill
              sizes="36px"
              className="object-cover"
            />
          ) : (
            <UserCircleIcon className="h-full w-full text-slate-400" />
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-700">
            {author?.name || "نویسنده"}
          </p>

          <p className="mt-0.5 text-xs text-slate-400">
            نویسنده‌ی مطلب
          </p>
        </div>
      </div>

      {/* دیدگاه‌ها، لایک و بوکمارک */}
      <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500">
        <div
          className="flex items-center gap-1.5"
          title="تعداد دیدگاه‌ها"
        >
          <ChatBubbleOvalLeftEllipsisIcon className="h-4 w-4 text-slate-400" />

          <span>
            {toPersianDigits(post.commentsCount ?? 0)} دیدگاه
          </span>
        </div>

        {/* لایک */}
        <button
          type="button"
          onClick={likeHandler}
          disabled={isLiking}
          aria-label={post.isLiked ? "لغو لایک" : "لایک کردن"}
          aria-pressed={Boolean(post.isLiked)}
          title={post.isLiked ? "لغو لایک" : "پسندیدن"}
          className="inline-flex items-center gap-1.5 rounded-lg p-1 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <HeartIcon
            className={`h-5 w-5 transition ${
              post.isLiked
                ? "text-red-500"
                : "text-slate-400 hover:text-red-500"
            }`}
          />
        </button>

        {/* بوکمارک */}
        <button
          type="button"
          onClick={bookmarkHandler}
          disabled={isBookmarking}
          aria-label={
            post.isBookmarked
              ? "حذف از ذخیره‌شده‌ها"
              : "ذخیره کردن پست"
          }
          aria-pressed={Boolean(post.isBookmarked)}
          title={post.isBookmarked ? "حذف از ذخیره‌شده‌ها" : "ذخیره"}
          className="inline-flex items-center gap-1.5 rounded-lg p-1 transition hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <BookmarkIcon
            className={`h-5 w-5 transition ${
              post.isBookmarked
                ? "text-indigo-700"
                : "text-slate-400 hover:text-indigo-600"
            }`}
          />
        </button>
      </div>
    </div>
  );
}

export default PostContent;