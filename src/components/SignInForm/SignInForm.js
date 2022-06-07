import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "../../redux/user/userActions";
import { localService } from "../../services/localService";
import {
  getCollectionAndDocument,
  signUserInWithEmailAndPassword,
  signUserInWithPopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

import "./SignInForm.scss";
const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  useEffect(() => {
    const user = localService.getUserInfo();
    dispatch(setUserInfo(user));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = signUserInWithEmailAndPassword(email, password);
    res.then((data) => {
      dispatch(setUserInfo(data.user));
      localService.setUserInfo(data.user);
      navigate("/shop");
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSignInWithPopup = () => {
    const res = signUserInWithPopup();
    res.then((data) => {
      dispatch(setUserInfo(data.user));
      localService.setUserInfo(data.user);
      getCollectionAndDocument();
      navigate("/shop");
    });
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form
        onSubmit={handleSubmit}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            buttonType="google"
            type="button"
            onClick={handleSignInWithPopup}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
