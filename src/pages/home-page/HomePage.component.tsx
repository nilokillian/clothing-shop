import React from "react";
import Directory from "../../components/directory/Directory.component";

import "./homePage.styles.scss";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
