"use server";

import { createCommentApi } from "@/services/commentService";
import { cookies } from "next/headers";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";

export async function createComment(prevState, { formData, postId, parentId }) {
  try {
    const cookieStore = await cookies();
    const options = setCookiesOnReq(cookieStore);

    const text = formData.get("text")?.toString().trim();

    if (!text) {
      return {
        error: "لطفاً متن نظر را وارد کنید.",
      };
    }

    const rawFormData = {
      text,
      postId,
      parentId,
    };

    const result = await createCommentApi(rawFormData, options);

    const message =
      result?.data?.message ||
      result?.message ||
      "نظر شما با موفقیت ثبت شد.";

    // تازه‌سازی داده‌های صفحات جزئیات پست
    revalidatePath("/blogs/[postSlug]", "page");

    return {
      message,
    };
  } catch (err) {
    console.error("Create comment error:", err?.response?.data || err);

    return {
      error:
        err?.response?.data?.message ||
        err?.message ||
        "ثبت نظر با خطا مواجه شد.",
    };
  }
}