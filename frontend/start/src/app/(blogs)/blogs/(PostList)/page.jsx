import { Suspense } from "react";
import PostList from "../_components/PostList";
import Loading from "../loading";
import { cookies } from "next/headers";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { getAllPostsApi } from "@/services/postServices";
import Search from "@/ui/Search";
import queryString from "query-string";
import { toPersianDigits } from "@/utils/numberFormatter";
import Fallback from "@/ui/Fallback";

export default async function BlogPage({ searchParams }) {
  const queries = queryString.stringify(await searchParams);
  const cookieStore = await cookies();
  const options = setCookiesOnReq(cookieStore);

  const { posts } = await getAllPostsApi(queries, options);

  const { search } = await searchParams;
  const postLen = toPersianDigits(posts.length);

  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length == 0
            ? "هیچ پستی با این مشخصات یافت نشد"
            : `نمایش ${postLen} پست برای `}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}

      <Suspense fallback={<Fallback />}>
        <PostList posts={posts}/>
      </Suspense>
    </>
  );
}
