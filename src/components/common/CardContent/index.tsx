import React from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
}

const CardContent: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className={classnames(styles.card_content, className)}>{children}</div>
  );
};

export { CardContent };
