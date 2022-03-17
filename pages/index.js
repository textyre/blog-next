import Head from 'next/head';
import Image from 'next/image';
import styles from './styles.module.scss';
import { WorkCard } from '../components/WorkCard';
import { WorkCards } from '../components/WorkCard/WorkCards';
import { OzonCard } from '../components/OzonCard';
import { CSMoneyCard } from '../components/CSMoneyCard';
import { NNLCard } from '../components/NNLCard';
import { SlotexCard } from '../components/SlotexCard';

const works = [{ name: 'Ozon' }, { name: 'CS.MONEY' }, { name: 'Nonamelab' }, { name: 'Slotex' }];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.main}>
          <p className={styles.main__text}>
              Hello! My name is Uliyan and I am based in Moscow <img src="/moscow.png" alt="Moscow" className={styles.main__text__img} />.
              Currently working at Ozon (russian e-commerce, like Amazon <img src="/bezos.png" alt="Bezos" className={styles.main__text__img} />) as Frontend Devoloper.
              I specialise in creating scalable & complicity interfaces, and I develop CRM at last 2 years.
          </p>
          <p className={styles.main__title}>
              Works:
          </p>
          <div>
            <OzonCard />
            <CSMoneyCard />
            <NNLCard />
            <SlotexCard />
          </div>
          <footer className={styles.main__footer}>
            <p className={styles.main__footer__dont_be_shy}>
                Don&apos;t be shy. <br></br>
                Write a letter first.
            </p>
            <p className={styles.main__email}>uliyan96@gmail.com</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
