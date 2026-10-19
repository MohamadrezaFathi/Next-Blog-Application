import Image from "next/image";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  BookmarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { toPersianDigits } from "@/utils/numberFormatter";

function PostContent({ post }) {
  const author = post.author;

  return (
    <div className="flex flex-col gap-4 p-5">
      <h3 className="line-clamp-2 min-h-[1.5rem] text-base font-extrabold leading-7 text-slate-900 transition group-hover:text-indigo-700">
        {post.title}
      </h3>

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

      <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500">
        <div className="flex items-center gap-1.5" title="تعداد دیدگاه‌ها">
          <ChatBubbleOvalLeftEllipsisIcon className="h-4 w-4 text-slate-400" />
          <span>{toPersianDigits(post.commentsCount ?? 0)} دیدگاه</span>
        </div>

        <div className="flex items-center gap-1.5" title="پسندیدن">
          <HeartIcon className="h-4 w-4 text-slate-400" />
          <span>{toPersianDigits(post.likeCount ?? 0)}</span>
        </div>

        <div className="flex items-center gap-1.5" title="ذخیره">
          <BookmarkIcon className="h-4 w-4 text-slate-400" />
          <span>{toPersianDigits(post.bookmarkCount ?? 0)}</span>
        </div>
      </div>
    </div>
  );
}

export default PostContent;