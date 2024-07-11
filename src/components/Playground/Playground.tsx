import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { INTERVAL_TIME } from "./constants";
import { setCurrentStep, setSteps, setUnsuccess } from "./store/slices";
import RandomKeys from "./components/RandomKeys";
import KeyPressed from "./components/KeyPressed";
import Score from "./components/Score"

import Controls from "./components/Controls";
const Playground: React.FC = () => {
  const state = useAppSelector((state) => state.playground);
  const dispatch = useAppDispatch();

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        // setUnsuccess вызываем первым, тк он позволяет проверить предыдущий элемент
        dispatch(setUnsuccess());
        dispatch(setCurrentStep());
        dispatch(setSteps());
      }, INTERVAL_TIME);
    } else {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout);
    }

    return () => {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout);
    };
  }, [isTimerActive, dispatch]);

  return (
    <div>
      {state.currentStep}
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
      <KeyPressed isTimerActive={isTimerActive} />
      <Score />
    </div>
  );
};

export default Playground;
