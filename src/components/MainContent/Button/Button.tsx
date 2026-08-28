import styles from "./button.module.scss";

type Props = {
  text: string;
  className: string;
};

const Button = ({ text, className }: Props) => {
  return (
    <button className={`${styles.root} ${className ? className : ""}`}>
      {text}
    </button>
  );
};

export default Button;
