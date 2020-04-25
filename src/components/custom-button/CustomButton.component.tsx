import React from "react";
import "./customButton.style.scss";
import { ICustomButtonProps } from "../../utils/interfaces";

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
