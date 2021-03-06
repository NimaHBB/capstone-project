import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

const CreateProductsDetails = ({ productDetail, images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const imagesCount = images.length;

  const nextImage = () => {
    currentImage < imagesCount - 1
      ? setCurrentImage(currentImage + 1)
      : setCurrentImage(imagesCount - 1);
    console.log(currentImage);
  };

  const prevImage = () => {
    currentImage > 0 ? setCurrentImage(currentImage - 1) : setCurrentImage(0);
  };

  let isLogedIn = false;
  const CheckUserIsLoggedIn = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      isLogedIn = true;
    } else {
      isLogedIn = false;
    }
  };
  const doCheckUser = () => {
    CheckUserIsLoggedIn();
    isLogedIn === true ? alert("YES") : alert("NO");
  };

  return (
    <ProductDetails>
      <ProductImage src={images[currentImage]} alt="Sofa" />
      <Next onClick={nextImage}>&#8250;</Next>
      <Prev onClick={prevImage}>&#8249;</Prev>
      <ContentTextsDiv>
        <Title>{productDetail.title}</Title>

        <Price>Price: {productDetail.price + " €"}</Price>
        <Description>{productDetail.description}</Description>
      </ContentTextsDiv>
      <AddToBasketButton onClick={doCheckUser}>Add to Basket</AddToBasketButton>
      {/* <AddRemoveFavourite src="https://nimahabibi.de/shop/image/icon/favorite-black.svg"></AddRemoveFavourite> */}
    </ProductDetails>
  );
};
export default CreateProductsDetails;

const ProductDetails = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 640px;
  background: white;
  margin: 5px 30px 30px 30px;
  padding: 10px 20px;
`;
const Title = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;
const Price = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: right;
  color: red;
`;

const Description = styled.p`
  font-size: 0.9rem;
`;

const ProductImage = styled.img`
  margin: 10px auto 30px auto;
  max-width: 80%;
  max-height: 50%;
`;

const AddToBasketButton = styled.button`
  display: inline-block;
  align-self: center;
  cursor: pointer;
  margin: 20px auto;
  width: 200px;
  height: 60px;
  background-color: rgb(2, 113, 194);
  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 5px;
  color: white;
  font-size: 1.2rem;
  font-weight: 900;
  border: none;
  border-radius: 5px;
`;

const ContentTextsDiv = styled.div`
  display: inline;
`;

const AddRemoveFavourite = styled.img`
  align-self: center;
  cursor: pointer;
  width: 30px;
  height: 30px;
  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 5px;
  border-radius: 30px;
  padding: 20px;
  &:hover {
    border: 1.5px solid rgb(2, 113, 194);
  }
`;

const Next = styled.p`
  font-size: 10rem;
  position: absolute;
  right: 1px;
  top: 1px;
  color: grey;
  cursor: pointer;
`;
const Prev = styled.p`
  font-size: 10rem;
  position: absolute;
  left: 1px;
  top: 1px;
  color: grey;
  cursor: pointer;
`;
