import { useEffect, useState } from "react";
import "./App.css";
import CreateCategoryCard from "./components/functions/cerateCategoryCard";
import CreateProductsCard from "./components/functions/createProductsCard";
function App() {
  console.clear();
  function ShowCategoryDetails(catName) {
    alert(catName + " category clicked");
  }

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

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
        console.log(data);
      });
  }, []);

  /* useEffect(()=> {
        Promise.all([
          fetch('/api'),
          //fetch('/products')
        ])
        .then(allResps=>{
          setCategories(allResps[0])
          //setProducts(allResps[1])
          console.log(categories)
          //console.log(products)
        }
        )
          },[])*/

  return (
    <div className="App">
      <div className="App-header">
        <h4>Nitto Shop</h4>
        <form onSubmit={""}>
          <input
            type="text"
            className="search"
            placeholder="search here..."
            autofocus
            required
          ></input>
          <button id="searchBtn">&#10132;</button>
        </form>
      </div>
      <main>
        <h3>Die besten Angebote</h3>
        <div className="productsContainer">
          {products.map((product, index) => (
            <CreateProductsCard
              key={index}
              doClick={() => alert("product")}
              ProductObject={product}
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
            />
          ))}
        </div>
      </main>
      <footer>
        <ul>
          <li className="Home">
            <a href="localcost:3000">
              <img
                src="https://raw.githubusercontent.com/NimaHBB/capstone-project/main/client/src/images/icon/home.svg"
                alt="home icon"
              />
            </a>
          </li>
          <li>
            <a href="localcost:3000">
              <img
                src="https://raw.githubusercontent.com/NimaHBB/capstone-project/main/client/src/images/icon/person.svg"
                alt="person icon"
              />
            </a>
          </li>
          <li>
            <a href="localcost:3000">
              <img
                src="https://raw.githubusercontent.com/NimaHBB/capstone-project/main/client/src/images/icon/favorite_menue.svg"
                alt="favorite icon"
              />
            </a>
          </li>
          <li>
            <a href="localcost:3000">
              <img
                src="https://raw.githubusercontent.com/NimaHBB/capstone-project/main/client/src/images/icon/menu.svg"
                alt="menu icon"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;

const productsFake = [
  {
    _id: { $oid: "626efeae6494b6812a0338f7" },
    id: { $numberInt: "5" },
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    mark: "Zara",
    price: { $numberInt: "695" },
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: { $numberDouble: "4.6" }, count: { $numberInt: "400" } },
  },
  {
    _id: { $oid: "626efeae6494b6812a0338f5" },
    id: { $numberInt: "3" },
    title: "Mens Cotton Jacket",
    price: { $numberDouble: "55.99" },
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: { $numberDouble: "4.7" }, count: { $numberInt: "500" } },
  },
  {
    _id: { $oid: "626efeae6494b6812a0338f4" },
    id: { $numberInt: "2" },
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: { $numberDouble: "22.3" },
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: { $numberDouble: "4.1" }, count: { $numberInt: "259" } },
  },
  {
    _id: { $oid: "626efeae6494b6812a0338fa" },
    id: { $numberInt: "8" },
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: { $numberDouble: "10.99" },
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: { $numberDouble: "1.9" }, count: { $numberInt: "100" } },
  },
  {
    _id: { $oid: "626efeae6494b6812a0338fc" },
    id: { $numberInt: "10" },
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: { $numberInt: "109" },
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: { $numberDouble: "2.9" }, count: { $numberInt: "470" } },
  },
  {
    _id: { $oid: "626efeae6494b6812a0338f9" },
    id: { $numberInt: "7" },
    title: "White Gold Plated Princess",
    price: { $numberDouble: "9.99" },
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: { $numberInt: "3" }, count: { $numberInt: "400" } },
  },
  {
    _id: { $oid: "626efeae6494b6812a033900" },
    id: { $numberInt: "14" },
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: { $numberDouble: "999.99" },
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: { rate: { $numberDouble: "2.2" }, count: { $numberInt: "140" } },
  },
  {
    _id: { $oid: "626efeae6494b6812a0338fe" },
    id: { $numberInt: "12" },
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: { $numberInt: "114" },
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: { rate: { $numberDouble: "4.8" }, count: { $numberInt: "400" } },
  },
];
