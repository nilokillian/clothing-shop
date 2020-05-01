import React from "react";
import Directory from "../../components/directory/Directory";

import styles from "./homePage.module.scss";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.homePapeContainer}>
      <Directory />
    </div>
  );
};

export default HomePage;
