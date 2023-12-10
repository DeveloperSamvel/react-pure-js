import { createElement } from 'react';
import styles from "./Header.module.css";

const Header = () => {
    return createElement(
        "header",
        {style: {fontSize: 32}, "className": styles["red"]},
        'Test'
    )
}

export default Header