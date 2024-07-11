import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Controls from "./components/Controls";
import KeyPressed from "./components/KeyPressed";
import Modal from "./components/Modal";
import RandomKeys from "./components/RandomKeys";
import Score from "./components/Score";
import { END_GAME_CONDITIONS, INTERVAL_TIME } from "./constants";
import { setCurrentStep, setSteps, setUnsuccess } from "./store/slices";

const Playground: React.FC = () => {
  const state = useAppSelector((state) => state.playground);
  const dispatch = useAppDispatch();

  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false);

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

  useEffect(() => {
    const isSuccessful =
      state.totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT;
    const isUnsuccessful =
      state.totalUnsuccessful === END_GAME_CONDITIONS.UNSUCCESS_COUNT;

    isSuccessful && setIsSuccessEndGame(true);
    isUnsuccessful && setIsSuccessEndGame(false);

    if (isSuccessful || isUnsuccessful) {
      setIsShowModal(true);
      setIsTimerActive(false);
    }
  }, [state.totalSuccessful, state.totalUnsuccessful]);

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
      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          isSuccessEndGame={isSuccessEndGame}
        />
      )}
    </div>
  );
};

export default Playground;
