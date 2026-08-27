import LeftNavigation from "../LeftNavigation/LeftNavigation";
import styles from "./navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.root}>
      <LeftNavigation />
    </div>
  );
};

export default Navigation;
