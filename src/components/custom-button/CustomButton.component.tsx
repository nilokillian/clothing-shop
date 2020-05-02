import React from "react";
import { ICustomButtonProps } from "../../interfaces-and-types/custom-button/ICustomButtonProps";

import styles from "./customButton.module.scss";

const CustomButton: React.FC<ICustomButtonProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  customStyle,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? styles.inverted : ""} ${
        isGoogleSignIn ? styles.googleSignIn : ""
      } ${styles.customButton} ${customStyle ? customStyle : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
