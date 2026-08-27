import styles from "./globalNavigation.module.scss";
import rainFocusLogo from "../../assets/NavLogo.svg";
import eventLogo from "../../assets/eventLogo.svg";
import profilePicture from "../../assets/profilePicture.png";

const GlobalNavigation = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logoContainer}>
        <img src={rainFocusLogo} alt="RainFocus Logo" />
        <img src={eventLogo} className={styles.eventLogo} alt="Event Logo" />
      </div>
      <img
        src={profilePicture}
        alt="Profile Picture"
        className={styles.profilePicture}
      />
    </div>
  );
};

export default GlobalNavigation;
