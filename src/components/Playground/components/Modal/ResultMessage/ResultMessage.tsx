// import styles from "./resultMessage.module.css"

export interface IresultMessageProps {
  isSuccessEndGame: boolean;
}

const resultMessage: React.FC<IresultMessageProps> = (props) => {
  const { isSuccessEndGame } = props;

  return isSuccessEndGame ? (
    <span>
      Congratulations! <br /> You win!
    </span>
  ) : (
    <span>
      My regrets. <br /> You have lost this game
    </span>
  );
};

export default resultMessage;
