import React from "react";
import { Section } from "@components/common/Section";
import { Title } from "@components/common/Title";

import styles from "./styles.module.scss";

const BlogPosts: React.FC = () => {
  return (
    <Section className={styles.blogs}>
      <Title className={styles.title}>
        Blog <span> posts </span>
      </Title>
      <div className={styles.empty}>Soon.</div>
    </Section>
  );
};

export { BlogPosts };
