import type { FC, ReactNode } from "react";
import styles from "./ButtonStyles.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={styles.button}>
      {children}
    </div>
  );
};

export default Button;
