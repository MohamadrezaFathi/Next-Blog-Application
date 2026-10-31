import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUserApi } from "./authService";
import { getAllPostsApi } from "./postServices";
import { getAllCommentsApi } from "./commentService";
import { number } from "yup";

export default async function fetchCardData() {
  const cookieStore = await cookies();
  const options = setCookiesOnReq(cookieStore);

  try {
    const data = await Promise.all([
      getAllUserApi(options),
      getAllCommentsApi(options),
      getAllPostsApi(),
    ]);

    const numberOfUsers = Number(data[0].users.length ?? "0");
    const numberOfComments = Number(data[1].commentsCount ?? "0");
    const numberOfPosts = Number(data[2].posts.length ?? "0");

    return {
      numberOfUsers,
      numberOfComments,
      numberOfPosts,
    };
  } catch (error) {
    throw new Error("بارگذاری اطلاعات با خطا مواجه شد");
  }
}
