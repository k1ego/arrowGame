import { useCallback, useEffect } from "react";
import { MAP_ARROW_CODES } from "../../constants";

import { useAppDispatch } from "../../../../app/hooks";
import { TypographyHeader, TypographyText } from "../../../UI";
import { setEnteredValue } from "../../store/slices";
import { useKeyPressedElement } from "./hooks";

export interface IKeyPressedProps {
  isTimerActive: boolean;
}

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props;

  const keyPressedElement = useKeyPressedElement();

  const dispatch = useAppDispatch();

  // при каждом ререндере будет меняться ссылка на эту функцию и у нас обработчика события на эту функцию и размонтировка компонента
  // но когда компонент будет размонтироваться, то на объекте будет уже другая ссылка и они будут не равны с первоначальной
  // значит размонтировка компонента не произойдет, а значит handleKeyDown нужно поместить в useCallback
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (MAP_ARROW_CODES.hasOwnProperty(e.key) && isTimerActive) {
        dispatch(setEnteredValue(e.key));
      }
    },
    [dispatch, isTimerActive],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.addEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div>
      <TypographyHeader>KeyPressed</TypographyHeader>
      <TypographyText>
        Press the key corresponding to the key in "Random keys"
      </TypographyText>

      <span>{keyPressedElement}</span>
    </div>
  );
};

export default KeyPressed;
