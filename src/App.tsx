import styles from "./App.module.scss";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className={styles.root}>
      <Navigation />
    </div>
  );
}

export default App;
