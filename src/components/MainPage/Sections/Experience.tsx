import React from "react";
import { ExperienceCards } from "./ExperienceCards";

import pageStyles from "../styles.module.scss";

const Experience: React.FC = () => (
  <section className={pageStyles.companies}>
    <h2 className={pageStyles.main__titles}>
      Four <span>lovely</span>
      <br />
      companies
    </h2>
    <ExperienceCards />
  </section>
);

export { Experience };
