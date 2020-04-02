import React from "react";
import styles from "./Header.module.css";

const Header = (): React.ReactElement => {
  return <h1 className={styles.container}>Todo List Application</h1>;
};

export default Header;