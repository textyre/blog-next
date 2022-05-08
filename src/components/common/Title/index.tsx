import React from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
}

const Title: React.FC<IProps> = ({ children, className }) => {
  return <h2 className={classnames(styles.title, className)}>{children}</h2>;
};

export { Title };
