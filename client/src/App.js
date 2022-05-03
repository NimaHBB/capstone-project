import { useEffect, useState } from "react";
import "./App.css";
import CreateCategoryCard from "./components/functions/cerateCategoryCard";
import CreateProductsCard from "./components/functions/createProductsCard";

const imagesPath="https://nimahabibi.de/shop/image/"

function App() {
  console.clear();
  function ShowCategoryDetails(catName) {
    alert(catName + " category clicked");
  }

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

      });
  }, []);

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
      <main>
        <h3>Die besten Angebote</h3>
        <div className="productsContainer">
          {products.map((product, index) => (
            <CreateProductsCard
              key={index}
              doClick={() => alert("product")}
              ProductObject={product}
              imagesPath={imagesPath}
            />
          ))}
        </div>
        <h3>Sortiment</h3>
        <div className="categoryContainer">
          {categories.map((category, index) => (
            <CreateCategoryCard
              key={index}
              doClick={ShowCategoryDetails}
              catObject={category}
              imagesPath={imagesPath}
            />
          ))}
        </div>
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