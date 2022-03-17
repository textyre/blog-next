import { WorkCard } from '../WorkCard';
import styles from './styles.module.scss';

const CSMoneyCard = () => (
  <WorkCard stickyTop={64} className={styles.cs_money}>
    <img src="/csmoney.svg" className={styles.logo} alt="CS.Money" />
  </WorkCard>
);

export { CSMoneyCard };
