
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
