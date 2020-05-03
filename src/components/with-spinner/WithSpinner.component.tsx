import React, { FC, ComponentClass } from "react";
import { ConnectedComponent } from "react-redux";
import styles from "./withSpinner.module.scss";

export type IWithSpinnerProps = {
  isLoading: boolean;
  [rest: string]: any;
};

type IWithSpinner = (props: IWithSpinnerProps) => JSX.Element;

const WithSpinner = (
  WrappedComponent: ComponentClass | FC | ConnectedComponent<FC<any>, any>
) => {
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
