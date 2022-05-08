import React, { useCallback } from "react";
import styles from "./styles.module.scss";
import classnames from "classnames";

interface IProps {
  className?: string;
}

type IPropsContainer = IProps;

interface ISkill extends IProps {
  isRectangleEachSecond?: boolean;
}

interface IPropsItems extends ISkill {
  skills: string[];
}

interface IPropsItem extends ISkill {
  label: string;
  index: number;
}

export const Container: React.FC<IPropsContainer> = ({
  children,
  className = "",
}) => (
  <div className={classnames(styles.skills_container, className)}>
    {children}
  </div>
);

const Items: React.FC<IPropsItems> = ({
  skills,
  isRectangleEachSecond,
  className = "",
}) => {
  return (
    <>
      {skills.map((skill, index) => (
        <Item
          label={skill}
          className={className}
          index={index}
          key={skill}
          isRectangleEachSecond={isRectangleEachSecond}
        />
      ))}
    </>
  );
};

const Item: React.FC<IPropsItem> = ({
  label,
  index,
  className,
  isRectangleEachSecond,
}) => {
  const classname = useCallback(
    (index) =>
      classnames(
        styles.skill,
        className,
        isRectangleEachSecond
          ? (index + 1) % 2 === 0 && styles.is_rectangle
          : null
      ),
    [isRectangleEachSecond, className]
  );

  return (
    <span className={classname(index)} key={label} tabIndex={index}>
      {label}
    </span>
  );
};

const Skills = {
  Container,
  Items,
  Item,
};

export { Skills };
