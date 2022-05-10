import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

const PageHeader: React.FC = ({}) => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.link}>
          <span>←</span> home
        </a>
      </Link>
    </div>
  );
};

export { PageHeader };
