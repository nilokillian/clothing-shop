import React from "react";
import { ICustomButtonProps } from "../../interfaces-and-types/custom-button/ICustomButtonProps";

import "./customButton.style.scss";

const CustomButton: React.FC<ICustomButtonProps> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
