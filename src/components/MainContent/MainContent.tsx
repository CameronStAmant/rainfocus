import Header from "./Header/Header";
import styles from "./mainContent.module.scss";

const MainContent = () => {
  return (
    <div className={styles.root}>
      <Header />
    </div>
  );
};

export default MainContent;
