import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";
import { CardContent } from "@components/common/CardContent";

const LinkToPostsPage: React.FC = () => {
  return (
    <CardContent className={styles.link_to_posts_page}>
      <Link href="/posts">
        <a>
          Read more <span>→</span>
        </a>
      </Link>
    </CardContent>
  );
};

export { LinkToPostsPage };
