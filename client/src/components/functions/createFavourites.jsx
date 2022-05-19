import React from "react";
import { NavLink } from "react-router-dom";
import ProductsDetails from "../../Pages/productsDetail";

const CreateFavourites = ({
  ProductObject,
  imagesPath,
  doClick,
  toggleFav,
  FavouriteIcon,
  isFav,
}) => {
if(isFav) { return (
    <div className="card">
      <div className="products">
        <NavLink to={`product/${ProductObject.id}`} className="NavLink">
          <div className="imageContainer">
            <img
              className="ProductImage"
              src={ProductObject.image}
              alt="Product's image"
            />
          </div>
          <div className="product-detail">
            <p className="Price">{ProductObject.price + " €"}</p>
            <p>{ProductObject.mark}</p>
            <p className="product_title">
              {ProductObject.title.substring(0, 20) + "..."}
            </p>
          </div>
        </NavLink>
        <div className="Favorite">
          <img
            src={FavouriteIcon}
            alt="Favorite Icon"
            onClick={toggleFav}
          ></img>
        </div>
      </div>
    </div>
  )}
  else{
    return <></>
  }
};

export default CreateFavourites;
