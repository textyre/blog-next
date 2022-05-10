import React from "react";
import { useBlogPosts } from "@components/MainPage/BlogPosts/BlogPostsContext";
import { PostItem } from "@components/PostsList/PostItem";
import { LinkToPostsPage } from "@components/PostsList/LinkToPostsPage";

import styles from "./styles.module.scss";

const PostsList = () => {
  const { postsMeta } = useBlogPosts();

  return (
    <div className={styles.post_list}>
      {postsMeta.map((post) => (
        <PostItem {...post} key={post.title} />
      ))}
      <LinkToPostsPage />
    </div>
  );
};

export { PostsList };
