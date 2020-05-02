import React from "react";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { ISingInState } from "../../interfaces-and-types/sing-in/ISingInState";

import styles from "./singIn.module.scss";

class SingIn extends React.Component<{}, ISingInState> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  private handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }

    this.setState({ email: "", password: "" });
  };

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;

    this.setState({ [name]: value } as any);
  };

  public render() {
    const { email, password } = this.state;
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>I alredy have an account</h2>
        <span>Sing in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={email}
            required
            handleChange={this.handleChange}
          />

          <FormInput
            label="Password"
            name="password"
            type="password"
            value={password}
            required
            handleChange={this.handleChange}
          />
          <div className={styles.buttons}>
            <CustomButton type="submit">SING IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SingIn;
