import React from "react";
import { Card } from "./_components/Cards";
import fetchCardData from "@/services/data";

async function profile() {
  const { numberOfUsers, numberOfComments, numberOfPosts } =
    await fetchCardData();
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card type="users" title="کاربران" value={numberOfUsers} />
        <Card type="comments" title="نظرات" value={numberOfComments} />
        <Card type="posts" title="پست ها" value={numberOfPosts} />
      </div>
    </div>
  );
}

export default profile;
