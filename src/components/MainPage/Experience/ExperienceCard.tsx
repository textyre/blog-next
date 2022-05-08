import React from "react";
import classnames from "classnames";
import Image, { StaticImageData } from "next/image";
import { Skills } from "@components/Skills";

import styles from "./styles.module.scss";

interface IProps {
  name?: string;
  className?: string;
  skills: string[];
  experience: string | React.ReactElement;
  image: StaticImageData;
}

const ExperienceCard: React.FC<IProps> = ({
  name,
  experience,
  skills,
  image,
  className,
}) => {
  return (
    <div className={classnames(styles.card_company, className)} key={name}>
      <div className={classnames(styles.images_companies, className)}>
        <Image src={image} alt={name} />
      </div>
      <h4 className={styles.work_experience}>{experience}</h4>
      <Skills.Container>
        <Skills.Items
          className={styles.skill}
          skills={skills}
          isRectangleEachSecond
        />
      </Skills.Container>
    </div>
  );
};

export { ExperienceCard };
