import React from "react";
import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.main__footer}>
      <p className={styles.main__footer__dont_be_shy}>
        Don&apos;t be shy. <br></br>
        Write a letter first.
      </p>
      <p className={styles.main__email}>uliyan96@gmail.com</p>
    </footer>
  );
};

export { Footer };
