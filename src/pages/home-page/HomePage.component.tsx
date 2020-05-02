import React from "react";
import Directory from "../../components/directory/Directory";

import style from "./homePage.module.scss";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div className={style.container}>
      <Directory />
    </div>
  );
};

export default HomePage;
