import React from "react";
import FormInput from "../form-input/FormInput.component";
import { ISingInState } from "../../utils/interfaces";
import CustomButton from "../custom-button/CustomButton.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./singIn.style.scss";

class SingIn extends React.Component<{}, ISingInState> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    this.setState({ [name]: value } as any);
  };

  public render() {
    const { email, password } = this.state;
    return (
      <div className="sing-in">
        <h2 className="title">I alredy have an account</h2>
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
          <div className="buttons">
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
