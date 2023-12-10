import { createElement } from "react";
import styles from "./App.module.css";

const App = () => {
    return createElement("h2", {style: {fontSize: 32}, "className": styles["red"]}, 'Test');
}

export default App;