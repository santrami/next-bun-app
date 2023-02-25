import React from "react";
import NextLink from "next/link"; // DOES NOT WORK
import { GetServerSideProps } from "next/types";

type Posts = {
  id: number;
  title: string;
};

export default function Home({ posts }: { posts: Posts[] }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Posts</h1>
      <hr />
      {posts?.map((post) => {
        return (
          <div key={post?.id}>
            <a href={`/posts/${post?.id}`}>
              <h2>{post.title}</h2>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};