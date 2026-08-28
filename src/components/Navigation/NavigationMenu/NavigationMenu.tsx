import styles from "./navigationMenu.module.scss";
import searchIcon from "@/assets/search.svg";
import MegaNav from "./MegaNav/MegaNav";
import { useEffect, useRef, useState } from "react";

const EVENT_TITLE = "RainFocus Summit";
const EVENT_DETAILS = "Lehi, UT • December 15th";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => {
      setIsMobile(mediaQuery.matches);

      if (!mediaQuery.matches && dialogRef.current?.matches(":modal")) {
        dialogRef.current.close();
        setIsOpen(false);
      }
    };

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog || !isMobile) {
      return;
    }

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isMobile, isOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobile && isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, isOpen]);

  return (
    <>
      <button
        className={styles.menuButton}
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="navigation-menu"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>
      <dialog
        ref={dialogRef}
        id="navigation-menu"
        className={styles.root}
        aria-label="Navigation menu"
      >
        <button
          className={styles.closeButton}
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
        <div className={styles.eventDetailsContainer}>
          <h5 className={styles.eventTitle}>{EVENT_TITLE}</h5>
          <h6 className={styles.eventDetails}>{EVENT_DETAILS}</h6>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <img
            className={styles.searchIcon}
            src={searchIcon}
            alt=""
            aria-hidden="true"
          />
          <input type="search" name="search" id="search" placeholder="Search" />
        </form>

        <MegaNav />
      </dialog>
    </>
  );
};

export default NavigationMenu;
