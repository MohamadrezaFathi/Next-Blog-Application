import { Suspense } from "react";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

import PostList from "../../../_components/PostList";
import Loading from "../../../loading";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import queryString from "query-string";
import { getAllPostsApi } from "@/services/postServices";

async function CategoryPosts({ categorySlug, searchParams }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const query = new URLSearchParams({
    categorySlug,
  });

  const queries = queryString.stringify(searchParams) + "&" + query.toString();

  // دریافت کوکی‌های کاربر فعلی
  const cookieStore = await cookies();
  const options = setCookiesOnReq(cookieStore);
  const { posts } = await getAllPostsApi(queries, options);

  // // // دریافت پست‌های دسته‌بندی همراه با اطلاعات احراز هویت
  // // const res = await fetch(
  // //   `${baseUrl}/post/list?${query.toString()}`,
  // //   {
  // //     ...options,
  // //     cache: "no-store",
  // //   }
  // // );

  // if (!res.ok) {
  //   throw new Error("دریافت پست‌های این دسته‌بندی با خطا مواجه شد.");
  // }

  // const result = await res.json();
  // const posts = result?.data?.posts ?? [];

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
          مطالب این دسته‌بندی
        </h1>
      </div>

      <PostList posts={posts} />
    </div>
  );
}

export default async function Category({ params }) {
  const { categorySlug } = await params;

  if (!categorySlug) {
    notFound();
  }

  return (
    <Suspense fallback={<fallback />}>
      <CategoryPosts categorySlug={categorySlug} />
    </Suspense>
  );
}
