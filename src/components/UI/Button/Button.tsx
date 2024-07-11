import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from "@mui/material";
import styles from "./Button.module.css";

export interface IButtonProps extends MaterialButtonProps {
  //
}

const Button: React.FC<IButtonProps> = (props) => {
  const { children } = props;
	
  return (
    <MaterialButton
      variant="contained"
      size="small"
      className={styles.button}
      {...props}
    >
      {children}
    </MaterialButton>
  );
};

export default Button;
