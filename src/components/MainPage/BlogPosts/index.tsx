import React from "react";
import pageStyles from "@components/MainPage/styles.module.scss";
import styles from "./styles.module.scss";

const BlogPosts: React.FC = () => {
  return (
    <section className={styles.blogs}>
      <h2 className={pageStyles.main__titles}>
        Blog <span className={pageStyles.third}> posts </span>
      </h2>
      <div className={styles.empty}>Soon.</div>
    </section>
  );
};

export { BlogPosts };
