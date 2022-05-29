import React, { useState } from "react";
import { signUserUpWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

import "./SignUpForm.scss";
const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, confirmPassword } = formFields;

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const res = signUserUpWithEmailAndPassword(email, password);
      res.then((data) => resetFormFields());
    } else {
      alert("Password Mismatch!");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form
        onSubmit={handleSignUp}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSignUp();
          }
        }}
      >
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit" buttonType="inverted">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
