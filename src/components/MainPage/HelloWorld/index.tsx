import React from "react";
import Image from "next/image";
import classnames from "classnames";
import BezosImage from "@public/bezos.png";
import MoscowImage from "@public/moscow.png";
import { Section } from "@components/common/Section";
import { CardContent } from "@components/common/CardContent";

import styles from "./styles.module.scss";

const HelloWorld: React.FC = () => {
  return (
    <Section className={styles.section}>
      <CardContent className={styles.card}>
        Hello! My name is Uliyan and I am based in Moscow{" "}
        <span className={classnames(styles.images, styles.moscow)}>
          <Image src={MoscowImage} alt="Moscow" />
        </span>
        . Currently working at Ozon (russian e-commerce, like Amazon{" "}
        <span className={classnames(styles.images, styles.bezos)}>
          <Image src={BezosImage} alt="Bezos" />
        </span>
        ) as Frontend Devoloper. I specialise in creating scalable & complicity
        interfaces, and I develop CRM at last 2 years.
      </CardContent>
    </Section>
  );
};

export { HelloWorld };
