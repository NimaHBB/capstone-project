import { useEffect, useState } from "react";
import CreateCategoryCard from "../components/functions/cerateCategoryCard";
import CreateProductsCard from "../components/functions/createProductsCard";
import ButtonBlue from "../components/css/styledButtonBlue";
import favorited from "../images/icon/favorited.svg";
import unfavorited from "../images/icon/favorite-black.svg";

const Home = () => {
  const imagesPath = "";

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [favouritesStatus, setFavouritesStatus] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [products_Object_Copy, set_Products_Object_Copy] = useState([]);
  const ShowMoreAmount = 6;
  const [sliceToShow, setSliceToShow] = useState(ShowMoreAmount);
  let favIcon = "";

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

  const ShowMore = () => {
    setSliceToShow(sliceToShow + ShowMoreAmount);
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

    if (localStorage.getItem(productID) === "False") {
      favIcon = unfavorited;
    } else {
      favIcon = favorited;
    }
  };

  const ToggleFavourites = (productID) => {
    if (localStorage.getItem(productID) === "False") {
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
        {products
          .slice(0, sliceToShow)
          .map(
            (product, index) => (
              getFavIcon(product.id),
              (
                <CreateProductsCard
                  key={index}
                  ProductObject={product}
                  toggleFav={() => ToggleFavourites(product.id)}
                  FavouriteIcon={favIcon}
                />
              )
            )
          )}
      </div>
      <div className="show-more-container">
        <ButtonBlue onClick={ShowMore}>Show More</ButtonBlue>
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
