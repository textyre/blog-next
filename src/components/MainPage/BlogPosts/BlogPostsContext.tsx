import React from "react";
import { Post, PostMeta } from "@api/index";

interface IBlogPostsContext {
  posts: Post[];
  postsMeta: PostMeta[];
}

export const BlogPostsContext = React.createContext<
  IBlogPostsContext | undefined
>(undefined);

export const useBlogPosts = () => {
  const context = React.useContext(BlogPostsContext);
  if (context == undefined) {
    throw new Error("useBlogPosts should use within BlogPostsContext");
  }

  return context;
};
