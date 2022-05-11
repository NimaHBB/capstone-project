import styled from "styled-components";
import { useState } from "react";
import { app } from "./initializeFirebase";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";


const CreateLoginPage = () => {
  let email = "";
  let password = "";
  const auth = getAuth();
  const doLogin = () => {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("nittoUser", user.uid);
        alert("You have loged in successfully!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const doRegister = () => {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.displayName = "MohammadHabibi";

        alert("user created with this informations: " + user.email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + "    " + errorMessage);
        // ..
      });
  };

  const ToggleLoginRegister = () => {
    document
      .getElementsByClassName("LoginForm")
      .ClassList.Toggle("DisplayNone");
  };

  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <LoginFormDiv className="LoginForm">
        <Label>Login here to access your Profile</Label>
        <UsernameTextBox
          id="email"
          type="text"
          placeholder="enter your email here"
        ></UsernameTextBox>
        <UsernameTextBox
          id="password"
          type="password"
          placeholder="enter your password here"
        ></UsernameTextBox>
        <ButtonLogin type="button" onClick={doLogin}>
          Sign in
        </ButtonLogin>
        <ButtonRegister type="button" onClick={doRegister}>
          Register
        </ButtonRegister>
        <p className="accountRegisterP">
          Not registered yet? ,{" "}
          <a href="" onClick={ToggleLoginRegister}>
            Click Here
          </a>{" "}
          to create your account
        </p>
      </LoginFormDiv>
    </>
  );
};
export default CreateLoginPage;

const LoginFormDiv = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const UsernameTextBox = styled.input`
  margin: 20px auto;
  font-size: 1rem;
  width: 300px;
  height: 50px;
`;

const Label = styled.label`
  margin: 20px auto;
  align-self: center;
  font-size: 1.25rem;
  font-weight: 900;
  font-family: "Roboto", cursive;
  color: #063773;
`;

const ButtonLogin = styled.button`
  margin: 20px auto;
  background: rgb(2, 113, 194);
  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 5px;
  color: white;
  font-size: 1.2rem;
  font-weight: 900;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  width: 300px;
  height: 50px;
  cursor: pointer;
`;

const ButtonRegister = styled(ButtonLogin)`
  background: rgb(194, 69, 2);
`;
