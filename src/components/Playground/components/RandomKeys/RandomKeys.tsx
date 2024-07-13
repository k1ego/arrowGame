import styles from "./RandomKeys.module.css";

import React from "react";

import { useAppSelector } from "../../../../app/hooks";

import WelcomeText from "./components/WelcomeText";
import RandomArrows from "./components/RandomArrows";
import { TypographyHeader } from "../../../UI";

export interface IRandomKeysProps {
  isTimerActive: boolean;
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  const { isTimerActive } = props;

  const state = useAppSelector((state) => state.playground);

  return (
    <div>
      <TypographyHeader>Random keys</TypographyHeader>
      {state.steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  );
};

export default RandomKeys;
