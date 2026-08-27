import styles from "./rightNavigation.module.scss";

const EVENT_TITLE = "RainFocus Summit";
const EVENT_DETAILS = "Lehi, UT • December 15th";

const RightNavigation = () => {
  return (
    <div className={styles.root}>
      <div className={styles.eventDetailsContainer}>
        <h5 className={styles.eventTitle}>{EVENT_TITLE}</h5>
        <h6 className={styles.eventDetails}>{EVENT_DETAILS}</h6>
      </div>
    </div>
  );
};

export default RightNavigation;
