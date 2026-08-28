import styles from "./navigationMenu.module.scss";
import searchIcon from "../../assets/search.svg";
import MegaNav from "../MegaNav/MegaNav";
import { useState } from "react";

const EVENT_TITLE = "RainFocus Summit";
const EVENT_DETAILS = "Lehi, UT • December 15th";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className={styles.menuButton}
        type="button"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <div className={`${styles.root} ${isOpen ? styles.open : ""}`}>
        <div className={styles.eventDetailsContainer}>
          <h5 className={styles.eventTitle}>{EVENT_TITLE}</h5>
          <h6 className={styles.eventDetails}>{EVENT_DETAILS}</h6>
        </div>
        <form className={styles.nosubmit}>
          <img
            className={styles.searchIcon}
            src={searchIcon}
            alt=""
            aria-hidden="true"
          />
          <input
            type="search"
            name="search"
            id="search"
            className={styles.nosubmit}
            placeholder="Search"
          />
        </form>

        <MegaNav />
      </div>
    </>
  );
};

export default NavigationMenu;
