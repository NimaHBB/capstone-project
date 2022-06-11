import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CreateProductsDetails from "../components/functions/createProductDetails";

const ProductsDetails = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(`/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  }, []);

  useEffect(() => {
    fetch(`/api/products`)
      .then((res) => res.json())
      .then((data) => setImages(data.map((pr) => pr.image)));
  }, []);
  return (
    <div className="productsContainer">
      <CreateProductsDetails productDetail={productDetail} images={images} />
    </div>
  );
};
export default ProductsDetails;
