import React from "react";
import SingIn from "../../components/sing-in/SingIn.component";
import SignUp from "../../components/sing-up/SingUp.component";
import "./signInAndSignUp.style.scss";

const SignInAndSignUpPage = () => {
  console.log("SignInAndSignUpPage");
  return (
    <div className="sign-in-and-sing-up">
      <SingIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
