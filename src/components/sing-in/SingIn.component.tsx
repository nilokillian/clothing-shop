import React from "react";
import { connect, MapDispatchToProps } from "react-redux";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import { ISingInState } from "../../interfaces-and-types/sing-in/ISingInState";
import {
  googleSignInStartAction,
  emailSignInStartAction,
} from "../../redux/user/userActions";

import { Dispatch } from "redux";
import {
  IUserActions,
  Credentials,
} from "../../interfaces-and-types/user/IUser";

import styles from "./singIn.module.scss";

type SingInDispatchToProps = {
  googleSignInStartAction: () => IUserActions;
  emailSignInStartAction: (payload: Credentials) => IUserActions;
};

class SingIn extends React.Component<SingInDispatchToProps, ISingInState> {
  constructor(props: SingInDispatchToProps) {
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
    this.props.emailSignInStartAction({ email, password });
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    // } catch (error) {
    //   console.log(error);
    // }

    // this.setState({ email: "", password: "" });
  };

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;

    this.setState({ [name]: value } as any);
  };

  public render() {
    const { email, password } = this.state;
    const { googleSignInStartAction } = this.props;
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
            <CustomButton
              type="button"
              onClick={googleSignInStartAction}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps: MapDispatchToProps<SingInDispatchToProps, {}> = (
  dispatch: Dispatch<IUserActions>
): SingInDispatchToProps => ({
  googleSignInStartAction: () => dispatch(googleSignInStartAction()),
  emailSignInStartAction: (credentials) =>
    dispatch(emailSignInStartAction(credentials)),
});

export default connect(null, mapDispatchToProps)(SingIn);
