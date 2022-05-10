import Head from "next/head";
import { MainPage } from "@components/MainPage";
import { getAllPosts, PostMeta } from "@api/index";
import { BlogPostsContextProvider } from "@components/MainPage/BlogPosts/BlogPostsContextProvider";
import { PageTitle } from "@components/common/PageTitle";

export default function Home({ postsMeta }: { postsMeta: PostMeta[] }) {
  return (
    <div className="container">
      <PageTitle>Hello, I am Uliyan</PageTitle>
      <BlogPostsContextProvider postsMeta={postsMeta}>
        <MainPage />
      </BlogPostsContextProvider>
    </div>
  );
}

const getStaticProps = async () => {
  const postsMeta = getAllPosts()
    .slice(0, 3)
    .map((post) => post.meta);
  return {
    props: {
      postsMeta,
    },
  };
};

export { getStaticProps };
