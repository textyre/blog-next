import path from "path";
import fs from "fs";
import fg from "fast-glob";
import matter from "gray-matter";

const POST_PATH = path.join(process.cwd(), "posts");

const POSTS_PATH = path.join(POST_PATH, "/*.mdx").replace(/\\/g, "/");

export const getSlugs = (): string[] => {
  const paths = fg.sync(POSTS_PATH);
  return paths.map((path) => {
    const parts = path.split("/");
    const filename = parts[parts.length - 1];
    const [slug] = filename.split(".");
    return slug;
  });
};

export interface PostMeta {
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
}

export interface Post {
  content: string;
  meta: PostMeta;
}

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POST_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);
  console.log(content, data);
  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? "",
      title: data.title ?? slug,
      tags: (data?.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
    },
  };
};

export const getAllPosts = () =>
  getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    });
