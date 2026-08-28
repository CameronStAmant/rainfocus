import styles from "./App.module.scss";
import MainContent from "./components/MainContent/MainContent";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className={styles.root}>
      <Navigation />
      <MainContent />
    </div>
  );
}

export default App;
