import react, { useEffect, useState } from "react";
import CreateCategoryCard from "../components/functions/cerateCategoryCard";
import CreateProductsCard from "../components/functions/createProductsCard";

const Home = () => {
  const imagesPath = "https://nimahabibi.de/shop/image/";

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [favouritesStatus, setFavouritesStatus] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [products_Object_Copy, set_Products_Object_Copy] = useState([]);
  let favIcon = "https://nimahabibi.de/shop/image/icon/favorite-black.svg";

  function ShowCategoryDetails(catName) {
    alert(catName + " category clicked");
  }

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
        set_Products_Object_Copy(data);
      });
  }, []);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const doSearch = () => {
    let searchResult = products_Object_Copy;
    //  searchResult.filter((prod)=>prod.title.includes(searchText))
    setProducts(
      searchResult.filter((prod) =>
        prod.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  const getFavIcon = (productID) => {
    if (localStorage.getItem(productID) === null) {
      localStorage.setItem(productID, "False");
    }

    if (localStorage.getItem(productID) == "False") {
      favIcon = "https://nimahabibi.de/shop/image/icon/favorite-black.svg";
    } else {
      favIcon = "https://nimahabibi.de/shop/image/icon/favorited.svg";
    }
  };

  const ToggleFavourites = (productID) => {
    if (localStorage.getItem(productID) == "False") {
      localStorage.setItem(productID, "True");
    } else {
      localStorage.setItem(productID, "False");
    }
    setFavouritesStatus([]);

  };
  return (
    <div>
      <div className="App-header">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="search"
            placeholder="search here..."
            value={searchText.value}
            onChange={handleChange}
          ></input>
          <button id="searchBtn" onClick={doSearch}>
            &#10132;
          </button>
        </form>
      </div>
      <h3>Die besten Angebote</h3>
      <div className="productsContainer">
        {products.map(
          (product, index) => (
            getFavIcon(product.id),
            (
              <CreateProductsCard
                key={index}
                ProductObject={product}
                imagesPath={imagesPath}
                toggleFav={() => ToggleFavourites(product.id)}
                FavouriteIcon={favIcon}
              />
            )
          )
        )}
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
    </div>
  );
};
export default Home;
