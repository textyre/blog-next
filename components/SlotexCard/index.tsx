import { WorkCard } from '../WorkCard';
import styles from './styles.module.scss';

const SlotexCard = () => (
  <WorkCard stickyTop={160} className={styles.slotex}>
    <img src="/SD.png" className={styles.logo} alt="Slotex Decor" />
  </WorkCard>
);

export { SlotexCard };
