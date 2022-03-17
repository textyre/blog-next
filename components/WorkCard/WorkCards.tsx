import React from 'react';
import { IWork } from './types';
import { WorkCard } from './index';
import styles from './styles.module.scss';

interface IProps {
    works: IWork[]
}

const WorkCards: React.FC<IProps> = ({ works }) => (
  <div className={styles.container}>
    {works.map((work, index) => (
      <WorkCard {...work} key={work.name} stickyTop={(index + 1) * 16} />
    ))}
  </div>
);

export { WorkCards };
