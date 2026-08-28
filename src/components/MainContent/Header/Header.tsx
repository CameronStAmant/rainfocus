import Button from "../Button/Button";
import styles from "./header.module.scss";
import eventLogo from "@/assets/eventLogo.svg";

const EVENT_TITLE = "RainFocus Summit";
const EVENT_DATE = "December 15th";
const EVENT_LOCATION = "Lehi, Utah";

const Header = () => {
  return (
    <div className={styles.root}>
      <img src={eventLogo} className={styles.eventLogo} alt="Event Logo" />
      <div className={styles.eventDetails}>
        <h1 className={styles.title}>{EVENT_TITLE}</h1>
        <span className={styles.date}>{EVENT_DATE}</span>
        <span className={styles.location}>{EVENT_LOCATION}</span>
      </div>
      <Button className={styles.button} text={"Edit event"} />
    </div>
  );
};

export default Header;
