import React from "react";
import { IFormInput } from "../../utils/interfaces";

import "./formInput.style.scss";

const FormInput: React.FC<IFormInput> = ({
  label,
  handleChange,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value && otherProps.value.length ? "shrink" : ""
          }form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
