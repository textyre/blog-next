import React from "react";
import { ExperienceCards } from "./ExperienceCards";
import { Section } from "@components/common/Section";
import { Title } from "@components/common/Title";

import styles from "./styles.module.scss";

const Experience: React.FC = () => (
  <Section>
    <Title className={styles.title}>
      Four <span>lovely</span>
      <br />
      companies
    </Title>
    <ExperienceCards />
  </Section>
);

export { Experience };
