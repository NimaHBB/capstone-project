import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CreateProductsDetails from "../components/functions/createProductDetails";

const ProductsDetails = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    fetch(`/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  }, []);

  return (
    <div className="productsContainer">
      <CreateProductsDetails productDetail={productDetail} />
    </div>
  );
};
export default ProductsDetails;
