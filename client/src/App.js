import {Routes,Route } from "react-router-dom";
import react from "react";
import "./App.css";
import Footer from "./components/functions/footer";
import Home from "./Pages/Home";
import ProductsDetails from "./Pages/productsDetail";
import Header from "./components/functions/header";


const imagesPath="https://nimahabibi.de/shop/image/";
function App() {
  console.clear();

  return (
    <div className="App">
     
<Header />
      <main id="main">
        <Routes>
          <Route path="/" element={ <Home />} />
        </Routes>
        <Routes>
          <Route path="product-detail" element={ <ProductsDetails />} />
        </Routes>
      </main>
        <Footer className="footer"/>
    </div>
      );
}

export default App;