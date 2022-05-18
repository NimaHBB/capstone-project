import { useState,useEffect } from "react";
import UserSignOut from "./userSignOut";

const imagesPath = "https://nimahabibi.de/shop/image/";
const Header = () => {
  // const [searchText,setSearchText]=useState("")

// const handleChange=(event)=>{
// setSearchText(event.target.value);
// }
// useEffect(() => {
//   console.log(searchText)
// }, [searchText]);
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
          src={imagesPath + "icon/login.svg"}
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
