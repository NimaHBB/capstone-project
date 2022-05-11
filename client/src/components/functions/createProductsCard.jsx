import React from "react";
import { NavLink } from "react-router-dom";
import ProductsDetails from "../../Pages/productsDetail";

const CreateProductsCard = ({ ProductObject, imagesPath, doClick }) => {
  return (
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
            src={imagesPath + "icon/favorite-black.svg"}
            alt="Favorite Icon"
            onClick={() => alert("clicked")}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default CreateProductsCard;
