import { createElement, Fragment } from "react";
import Header from "./components/Header/Header.component";
import Main from "./components/Main/Main.component";
import Footer from "./components/Footer/Footer.component";

const App = () => {
    return createElement(
        Fragment,
        {},
        createElement(Header),
        createElement(Main),
        createElement(Footer),
    );
}

export default App;