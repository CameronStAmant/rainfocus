import styles from "./button.module.scss";

type Props = {
  text: string;
  type: "primary";
  className: string;
};

const Button = ({ text, type, className }: Props) => {
  return (
    <button
      className={`${styles.root} ${type === "primary" ? styles.primary : ""} ${className ? className : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
