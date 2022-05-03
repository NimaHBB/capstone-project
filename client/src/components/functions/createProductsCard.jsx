import React from "react";

const CreateProductsCard = ({ ProductObject, imagesPath }) => {
  return (
    <div className="card">
      <div className="products">
        <div className="imageContainer">
          <img
            className="ProductImage"
            src={ProductObject.image}
            alt="Product's image"
          />
        </div>
        <img
          className="Favorite"
          src={imagesPath+"icon/favorite-black.svg"}
          alt="Favorite Icon"
        ></img>
        <div className="product_detail">
          <p className="Price">{ProductObject.price + " €"}</p>
          <p>{ProductObject.mark}</p>
          <p>{ProductObject.title.substring(0, 25) + "..."}</p>
        </div>
      </div>
    </div>
  );
};

export default CreateProductsCard;
