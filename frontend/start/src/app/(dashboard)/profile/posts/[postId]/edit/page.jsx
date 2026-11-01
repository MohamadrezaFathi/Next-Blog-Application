import Breadcrumbs from "@/ui/Breadcrumbs";
import { getPostById } from "@/services/postServices";
import { notFound } from "next/navigation";
import CreatePostForm from "../../create/_/CreatePostForm";

async function EditPostPage({ params }) {
  const { postId } = await params;

  const result = await getPostById(postId);
  const post = result?.post;

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "پست‌ها", href: "/profile/posts" },
          {
            label: "ویرایش پست",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />

      <h1 className="text-secondary-700 font-bold text-2xl mb-6">
        ویرایش پست
      </h1>

      <CreatePostForm postToEdit={post} />
    </div>
  );
}

export default EditPostPage;