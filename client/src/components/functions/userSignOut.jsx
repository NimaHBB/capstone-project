import { getAuth, signOut } from "firebase/auth";

const UserSignOut = () => {
  if (JSON.parse(localStorage.getItem("nittoUser")) !== "out") {
    localStorage.setItem("nittoUser", "out");
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("Sign-out successful.");
      })
      .catch((error) => {
        alert(error);
      });
  } else {
    alert("You are not logged in!");
  }
};

export default UserSignOut;
