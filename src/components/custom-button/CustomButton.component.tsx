import React from "react";
import { ICustomButtonProps } from "../../interfaces-and-types/custom-button/ICustomButtonProps";

import "./customButton.style.scss";

const CustomButton: React.FC<ICustomButtonProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
