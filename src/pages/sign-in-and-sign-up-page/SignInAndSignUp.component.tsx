import React from "react";
import SingIn from "../../components/sing-in/SingIn.component";
import SignUp from "../../components/sing-up/SingUp.component";
import styles from "./signInAndSignUp.module.scss";

const SignInAndSignUpPage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <SingIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
