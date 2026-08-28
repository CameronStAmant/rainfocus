import Header from "./Header/Header";
import styles from "./mainContent.module.scss";
import SetupGuide from "./SetupGuide/SetupGuide";

const MainContent = () => {
  return (
    <div className={styles.root}>
      <Header />
      <SetupGuide />
    </div>
  );
};

export default MainContent;
