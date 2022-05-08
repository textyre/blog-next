import React from "react";
import classnames from "classnames";
import NNLImage from "@public/nnl.png";
import CSMoneyImage from "@public/csmoney.png";
import SlotexImage from "@public/SD.png";
import OzonImage from "@public/ozon_logo.png";

import styles from "./styles.module.scss";
import { ExperienceCard } from "@components/MainPage/Sections/ExperienceCard";

const companies = [
  {
    image: OzonImage,
    name: "Ozon",
    className: styles.ozon,
    experience: "3 years",
    skills: ["Typescript", "GraphQL", "React", "Redux", "Centrifugo"],
  },
  {
    image: CSMoneyImage,
    name: "CS MONEY",
    className: styles.cs_money,
    experience: (
      <>
        Half year + <br /> 2 months
      </>
    ),
    skills: ["Vanilla JS", "OOP", "amCharts", "React", "Redux", "Websockets"],
  },
  {
    image: NNLImage,
    name: "Nonamelab",
    className: styles.nnl,
    skills: ["Vue 2.0", "Vuex", "SCSS", "Webpack"],
    experience: "Half year",
  },
  {
    image: SlotexImage,
    name: "Slotex",
    className: styles.slotex,
    experience: "1 year",
    skills: ["Vanilla JS", "Electron", "Node.js"],
  },
  // {
  //   src: GooseImage,
  //   alt: "Goose Money",
  // },
];

const ExperienceCards: React.FC = () => {
  return (
    <div className={styles.companies_cards}>
      {companies.map((company) => (
        <ExperienceCard {...company} key={company.name} />
      ))}
      <UndefinedCompany />
    </div>
  );
};

const UndefinedCompany = () => (
  <div className={classnames(styles.card_company, styles.undefined_company)}>
    <h2>Place for your company</h2>
  </div>
);

export { ExperienceCards };
