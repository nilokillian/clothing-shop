import React from "react";
import styles from "./withSpinner.module.scss";

export type IWithSpinnerProps = {
  isLoading: boolean;
  [rest: string]: any;
};

type IWithSpinner = (props: IWithSpinnerProps) => React.ReactNode | JSX.Element;

const WithSpinner = (WrappedComponent: React.FC) => {
  const Spinner: IWithSpinner = ({ isLoading, ...rest }) =>
    isLoading ? (
      <div className={styles.spinnerOverlay}>
        <div className={styles.spinnerContainer} />
      </div>
    ) : (
      <WrappedComponent {...rest} />
    );

  return Spinner;
};

export default WithSpinner;
