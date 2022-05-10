import React from "react";
import { PostMeta } from "@api/index";

import styles from "./styles.module.scss";
import { CardContent } from "@components/common/CardContent";
import Link from "next/link";

const PostItem: React.FC<PostMeta> = ({ title, excerpt, slug, tags, date }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a className={styles.post_link}>
        <CardContent className={styles.post_item}>
          <h2 className={styles.post_item__title} aria-label={title}>
            {title}
          </h2>
          <span className={styles.post_item__excerpt}>{excerpt}</span>
        </CardContent>
      </a>
    </Link>
  );
};

export { PostItem };
