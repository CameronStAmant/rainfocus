import GlobalNavigation from "./GlobalNavigation/GlobalNavigation";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import styles from "./navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.root}>
      <GlobalNavigation />
      <NavigationMenu />
    </div>
  );
};

export default Navigation;
