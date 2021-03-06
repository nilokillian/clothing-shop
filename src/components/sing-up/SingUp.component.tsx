import React, { useState } from "react";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { ISingUpState } from "../../interfaces-and-types/sing-up/ISingUpState";

import styles from "./singUp.module.scss";

const SignUp: React.FC = (): JSX.Element => {
  const [inputs, setInputs] = useState<ISingUpState>({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password, confirmPassword } = inputs;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user);
      setInputs({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    inputs[name] = value;
    setInputs({ ...inputs });
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>Sing up with your email and password</span>
      <form className="sing-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={inputs.displayName}
          handleChange={handleChange}
          label="Display name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={inputs.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={inputs.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={inputs.confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
