import React from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
}

const Section: React.FC<IProps> = ({ children, className }) => {
  return (
    <section className={classnames(styles.section, className)}>
      {children}
    </section>
  );
};

export { Section };
