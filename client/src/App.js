import {Routes,Route } from "react-router-dom";
import react from "react";
import "./App.css";
import Home from "./Pages/Home";
const imagesPath="https://nimahabibi.de/shop/image/"



function App() {
  console.clear();

  return (
    <div className="App">
      <div className="App-header">
        <h4>Nitto Shop</h4>
        <form onSubmit={""}>
          <input
            type="text"
            className="search"
            placeholder="search here..."
            autofocus
            required
          ></input>
          <button id="searchBtn">&#10132;</button>
        </form>
        <img className="basketMenue" 
        src={imagesPath+"icon/basket2.svg"}
        alt="Shopping Bag Icon"
        ></img>
      </div>

      <main id="main">
        <Routes>
          <Route path="/" element={ <Home />}>
          </Route>
        </Routes>
      </main>
      <footer>
        <ul>
          <li className="Home">
            <a href="localcost:3000">
              <img
                src={imagesPath+"icon/home.svg"}
                alt="home icon"
              />
            </a>
          </li>
          <li>
            <a href="localcost:3000">
              <img
                src={imagesPath+"icon/person.svg"}
                alt="person icon"
              />
            </a>
          </li>
          <li>
            <a href="localcost:3000">
              <img
                src={imagesPath+"icon/favorite_menue.svg"}
                alt="favorite icon"
              />
            </a>
          </li>
          <li>
            <a href="localcost:3000">
              <img
                src={imagesPath+"icon/menu.svg"}
                alt="menu icon"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
      );
}

export default App;