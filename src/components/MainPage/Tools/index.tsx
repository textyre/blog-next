import React from "react";
import classnames from "classnames";
import { Skills } from "@components/Skills";
import { Title } from "@components/common/Title";

import styles from "./styles.module.scss";

const skills = [
  {
    label: "Typescript",
    className: "typescript",
  },
  {
    label: "GraphQL",
    className: "graphql",
  },
  {
    label: "React",
    className: "react",
  },
  {
    label: "Redux",
    className: "redux",
  },
  {
    label: "Centrifugo",
    className: "centrifugo",
  },
  {
    label: "Vanilla JS",
    className: "vanilla",
  },
  {
    label: "OOP",
    className: "oop",
  },
  {
    label: "Vue 2.0",
    className: "vue",
  },
  {
    label: "Vuex",
    className: "vuex",
  },
  {
    label: "amCharts",
    className: "amcharts",
  },
  {
    label: "Lifecycle Page API",
    className: "lifecycle",
  },
  {
    label: "PostCSS",
    className: "postcss",
  },
  {
    label: "Websockets",
    className: "websockets",
  },
  {
    label: "SCSS",
    className: "scss",
  },
  {
    label: "Webpack",
    className: "webpack",
  },
  {
    label: "SOLID",
    className: "solid",
  },
  {
    label: "Patterns",
    className: "patterns",
  },
  {
    label: "Electron",
    className: "electron",
  },
  {
    label: "Node.js",
    className: "nodejs",
  },
  {
    label: "Formik",
    className: "formik",
  },
  {
    label: "Webstorm",
    className: "webstorm",
  },
] as const;

type TClassNames = typeof skills[number]["className"];
type TSkillStyles = {
  [className in TClassNames]: string;
};

const skillStyles: TSkillStyles = {
  amcharts: styles.amcharts,
  centrifugo: styles.centrifugo,
  electron: styles.electron,
  formik: styles.formik,
  graphql: styles.graphql,
  lifecycle: styles.lifecycle,
  nodejs: styles.nodejs,
  oop: styles.oop,
  patterns: styles.patterns,
  postcss: styles.postcss,
  react: styles.react,
  redux: styles.redux,
  scss: styles.scss,
  solid: styles.solid,
  vanilla: styles.vanilla,
  vue: styles.vue,
  vuex: styles.vuex,
  webpack: styles.webpack,
  websockets: styles.websockets,
  typescript: styles.typescript,
  webstorm: styles.webstorm,
};

const Tools: React.FC = () => (
  <section>
    <Title className={styles.title}>
      Tools <span> & </span>
      <br />
      technologies
    </Title>
    <Skills.Container className={styles.skill_container}>
      {skills.map((skill, index) => (
        <Skills.Item
          label={skill.label}
          className={classnames(
            styles.skill_item,
            skillStyles[skill.className]
          )}
          index={index}
          key={skill.label}
        />
      ))}
    </Skills.Container>
  </section>
);

export { Tools };
