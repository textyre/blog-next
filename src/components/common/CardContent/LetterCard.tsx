import React from "react";
import styles from "./styles.module.scss";

const LetterCard: React.FC = ({ children }) => {
  return (
    <div className={styles.letter_card_container}>
      <div className={styles.letter_card}>{children}</div>
    </div>
  );
};

export { LetterCard };
