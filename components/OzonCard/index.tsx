import Image from 'next/image';
import { WorkCard } from '../WorkCard';
import styles from './styles.module.scss';

const OzonCard = ({ stickyTop }) => (
  <WorkCard stickyTop={stickyTop || 16} className={styles.ozon_card}>
    <img src="/goose.png" className={styles.goose} />
    <img src="/na-komandu.png" className={styles.komandu} />
    <img src="/ozon_logo.png" className={styles.ozon_logo} />
    <img src="/feature.png" className={styles.feature} />
    <img src="/uvolen.png" className={styles.uvolen} />
  </WorkCard>
);

export { OzonCard };
