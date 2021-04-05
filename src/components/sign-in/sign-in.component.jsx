import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, SignInWithGoogle } from "../../firebase/firebase.utils";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./sign-in.styled";

class SignIn extends React.Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={SignInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
