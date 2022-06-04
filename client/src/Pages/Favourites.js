import react, { useEffect, useState } from "react";
import CreateFavourites from "../components/functions/createFavourites";

const Favourites = () => {
  const imagesPath = "https://nimahabibi.de/shop/image/";
  const [products, setProducts] = useState([]);
  const [favouritesStatus, setFavouritesStatus] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [products_Object_Copy, set_Products_Object_Copy] = useState([]);
  let favIcon = "https://nimahabibi.de/shop/image/icon/favorite-black.svg";

  useEffect(() => {
    fetch("https://servernitto.herokuapp.com/api/products")
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

  let isFav = false;
  const getFavIcon = (productID) => {
    if (localStorage.getItem(productID) === null) {
      localStorage.setItem(productID, "False");
    }

    if (localStorage.getItem(productID) == "False") {
      favIcon = "https://nimahabibi.de/shop/image/icon/favorite-black.svg";
      isFav = false;
    } else {
      favIcon = "https://nimahabibi.de/shop/image/icon/favorited.svg";
      isFav = true;
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
      <h3>Your Marked Articles</h3>
      <div className="productsContainer">
        {products.map(
          (product, index) => (
            getFavIcon(product.id),
            (
              <CreateFavourites
                key={index}
                ProductObject={product}
                imagesPath={imagesPath}
                toggleFav={() => ToggleFavourites(product.id)}
                FavouriteIcon={favIcon}
                isFav={isFav}
              />
            )
          )
        )}
      </div>
    </div>
  );
};
export default Favourites;
