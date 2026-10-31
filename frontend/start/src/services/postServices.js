import http from "./httpService";

export async function getAllPostsApi(queries, options) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/post/list?${queries}`, options);

  const { data } = await res.json();
  const { posts, totalPages } = data || {};
  return { posts, totalPages };
}

export default async function getPostBySlug(slug) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/post/slug/${slug}`);

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("دریافت اطلاعات مقاله با خطا مواجه شد.");
  }

  const result = await res.json();

  return result?.data?.post ?? null;
}

export async function likePostApi(postId) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}

export async function bookmarkPostApi(postId) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}
