import { Post, PostMeta } from "@api/index";
import React from "react";
import { BlogPostsContext } from "./BlogPostsContext";

interface IProps {
  posts?: Post[];
  postsMeta?: PostMeta[];
}

export const BlogPostsContextProvider: React.FC<IProps> = ({
  posts = [],
  postsMeta = [],
  children,
}) => {
  return (
    <BlogPostsContext.Provider value={{ posts, postsMeta }}>
      {children}
    </BlogPostsContext.Provider>
  );
};
