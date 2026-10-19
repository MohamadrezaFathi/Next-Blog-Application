import { Suspense } from "react";
import PostList from "../_components/PostList";
import Loading from "../loading";

export default function BlogPage() {
  return (
    <Suspense fallback={<Loading type="posts" />}>
      <PostList />
    </Suspense>
  );
}