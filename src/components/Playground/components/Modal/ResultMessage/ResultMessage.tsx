// import styles from "./resultMessage.module.css"
import { TypographyText } from "../../../../UI";

export interface IresultMessageProps {
  isSuccessEndGame: boolean;
}

const resultMessage: React.FC<IresultMessageProps> = (props) => {
  const { isSuccessEndGame } = props;

  return isSuccessEndGame ? (
    <TypographyText>
      Congratulations! <br /> You win!
    </TypographyText>
  ) : (
    <TypographyText>
      My regrets. <br /> You have lost this game
    </TypographyText>
  );
};

export default resultMessage;
