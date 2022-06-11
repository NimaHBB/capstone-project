import { useState, useEffect } from "react";
import UserSignOut from "./userSignOut";
import { getAuth } from "firebase/auth";
import login from "../../images/icon/login.svg";

const imagesPath = "https://nimahabibi.de/shop/image/";
const Header = () => {
  // const [searchText,setSearchText]=useState("")

  // const handleChange=(event)=>{
  // setSearchText(event.target.value);
  // }
  // useEffect(() => {
  //   console.log(searchText)
  // }, [searchText]);

  const [isLogedIn, setIsLogedIn] = useState(false);
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
    }
  }, []);

  return (
    <>
      <div className="App-header">
        <h4>Nitto Shop</h4>
        {/* <form onSubmit={e=>e.preventDefault()}>
          <input
            type="text"
            className="search"
            placeholder="search here..."
            value={searchText.value}
            onChange={handleChange}
          ></input>
          <button id="searchBtn">&#10132;</button>
        </form> */}
        <img
          className="loginMenue"
          src={login}
          onClick={UserSignOut}
          alt="login icon"
        ></img>
        <img
          className="basketMenue"
          src={imagesPath + "icon/basket2.svg"}
          alt="Shopping Bag Icon"
        ></img>
      </div>
    </>
  );
};
export default Header;
