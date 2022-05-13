import styled from "styled-components";
import { useState } from "react";
import { appFirebase } from "./initializeFirebase";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile} from "firebase/auth";


const CreateLoginPage = () => {


  let email = "";
  let password = "";

  const [appMessage,setAppMessage]=useState("");
  const [messageDisplay,setMessageDisplay]=useState("none")
  const [messageType,setMessageType]=useState("error")

  const auth = getAuth();
  const doLogin = () => {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("nittoUser", user.uid);
        setAppMessage("You have loged in successfully!");
        setMessageDisplay("block")
        setMessageType("info")
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessageDisplay("block")
        setMessageType("error")

        switch(error.code){
          case "auth/wrong-password":setAppMessage("password is wrong!")
          break;
          case "auth/user-not-found":setAppMessage("this email is not registered!")
          break;
          case "auth/too-many-requests":setAppMessage("Too many requests! Try again later.")
          break;
          default :setAppMessage(errorCode)
          break;
        }
      });
  };

  const doRegister = () => {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user,{displayName:"Mohammad Habibi"})
       
        setAppMessage("user created with this informations: " + user.email);
        setMessageDisplay("block")
        setMessageType("info")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        errorCode=="auth/email-already-in-use"? setAppMessage("this email is registered before!"): setAppMessage(errorCode);
        setMessageDisplay("block")
        setMessageType("error")

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
      <MessageBox display={messageDisplay}><Message  msgType={messageType}>{appMessage}</Message></MessageBox>
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

const MessageBox=styled.div`

display:${props=> props.display};
position:absolute;
left:10px;
bottom:9%;
background: white;
width:auto;
padding: 0 10px;
height:50px;
justify-content:center;
border-radius:30px 30px 30px 0;
border:0.5px solid rgb(2, 113, 194);
box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 5px;
`;

const Message=styled.p`
color: ${props=>props.msgType=="error"?"red":"green"} ;
font-size:1rem;
font-weight:500;
text-align:center;
`;
