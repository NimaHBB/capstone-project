import styled from "styled-components";
import React from "react";

const CreateProductsDetails = ({ productDetail }) => {
  return (
    <ProductDetails>
      <ProductImage src={productDetail.image} alt="Sofa" />
      <ContentTextsDiv>
        <Title>{productDetail.title}</Title>

        <Price>Price: {productDetail.price + " €"}</Price>
        <Description>{productDetail.description}</Description>
      </ContentTextsDiv>
      <AddToBasketButton>Add to Basket</AddToBasketButton>
      <AddRemoveFavourite src="https://nimahabibi.de/shop/image/icon/favorite-black.svg"></AddRemoveFavourite>
    </ProductDetails>
  );
};
export default CreateProductsDetails;

const ProductDetails = styled.div`
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
