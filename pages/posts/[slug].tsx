import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { Title } from "@components/common/Title";
import { getPostFromSlug, getSlugs, PostMeta } from "@api/index";

import styles from "./styles.module.scss";
import { LetterCard } from "@components/common/CardContent/LetterCard";
import { PageTitle } from "@components/common/PageTitle";
import { PageHeader } from "@components/common/PageHeader";

interface IStaticProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

const PostPage: React.FC<IStaticProps> = ({ source, meta }) => {
  return (
    <>
      <PageTitle>UM blog: {meta.title}</PageTitle>
      <PageHeader />
      <div className={styles.page_content}>
        <Title className={styles.post_title}>{meta.title}</Title>
        <div className={styles.post_text}>
          <MDXRemote {...source} components={{ LetterCard }} lazy />
        </div>
      </div>
    </>
  );
};

const getStaticProps: GetStaticProps<IStaticProps, { slug: string }> = async ({
  params,
}) => {
  const { slug } = params;
  const { content, meta } = getPostFromSlug(slug);
  const source = await serialize(content);
  return {
    props: {
      source,
      meta,
    },
  };
};

const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export { getStaticProps, getStaticPaths };

export default PostPage;
