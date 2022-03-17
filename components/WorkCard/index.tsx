import React from 'react';
import classnames from 'classnames';
import { IWork } from './types';
import styles from './styles.module.scss';

interface IProps {
  stickyTop: number,
  className?: string
}

const WorkCard: React.FC<IProps> = ({ children, stickyTop, className  }) => (
  <div className={classnames(
    styles.card,
    className
  )} style={{ top: stickyTop }}>
    {children}
  </div>
);

export { WorkCard };
