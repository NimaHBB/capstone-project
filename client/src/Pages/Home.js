import react,{ useEffect, useState } from "react";
import CreateCategoryCard from "../components/functions/cerateCategoryCard";
import CreateProductsCard from "../components/functions/createProductsCard";
const Home=()=>{
    const imagesPath="https://nimahabibi.de/shop/image/"

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

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
      });
  }, []);


  const showProductDetailPage=()=>{
    //document.getElementById('main').innerHTML=''
  }


    return(

<div>
<h3>Die besten Angebote</h3>
        <div className="productsContainer">
          {products.map((product, index) => (
            <CreateProductsCard
              key={index}
              doClick={showProductDetailPage}
              ProductObject={product}
              imagesPath={imagesPath}
            />
          ))}
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
}
export default Home