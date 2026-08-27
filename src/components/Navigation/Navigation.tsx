import LeftNavigation from "../LeftNavigation/LeftNavigation";
import RightNavigation from "../RightNavigation/RightNavigation";
import styles from "./navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.root}>
      <LeftNavigation />
      <RightNavigation />
    </div>
  );
};

export default Navigation;
