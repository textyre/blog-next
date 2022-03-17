import { WorkCard } from '../WorkCard';
import styles from './styles.module.scss';

const NNLCard = () => (
  <WorkCard stickyTop={112} className={styles.nnl}>
    <img src="/nnl.svg" className={styles.logo} alt="nonamelab" />
  </WorkCard>
);

export { NNLCard };
