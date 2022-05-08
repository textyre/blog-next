import React from "react";
import Image from "next/image";
import classnames from "classnames";
import BezosImage from "@public/bezos.png";
import MoscowImage from "@public/moscow.png";

import styles from "./styles.module.scss";

const HelloWorld: React.FC = () => {
  return (
    <section className={styles.main__text}>
      Hello! My name is Uliyan and I am based in Moscow{" "}
      <span className={classnames(styles.main__text__img, styles.moscow)}>
        <Image src={MoscowImage} alt="Moscow" />
      </span>
      . Currently working at Ozon (russian e-commerce, like Amazon{" "}
      <span className={classnames(styles.main__text__img, styles.bezos)}>
        <Image src={BezosImage} alt="Bezos" />
      </span>
      ) as Frontend Devoloper. I specialise in creating scalable & complicity
      interfaces, and I develop CRM at last 2 years.
    </section>
  );
};

export { HelloWorld };
