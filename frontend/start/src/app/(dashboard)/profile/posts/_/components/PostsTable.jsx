import { getAllPostsApi } from "@/services/postServices";
import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import React from "react";
import PostsRow from "./PostsRow";

async function PostsTable({ query }) {
  const { posts } = await getAllPostsApi(query);
  if (!posts.length) return <Empty resourceName="پستی" />;
  return (
    <Table>
      <Table.Header>
        <th>ردیف</th>
        <th>عنوان</th>
        <th>دسته بندی</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
        <th>نوع</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {posts.map((post, index) => (
          <PostsRow key={post._id} post={post} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default PostsTable;
