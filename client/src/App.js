import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/functions/footer";
import Home from "./Pages/Home";
import ProductsDetails from "./Pages/productsDetail";
import Header from "./components/functions/header";
// import Login from "./Pages/login";
import Favourites from "./Pages/Favourites";

const imagesPath = "https://nimahabibi.de/shop/image/";

function App() {
  console.clear();
  return (
    <div className="App">
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="favourites" element={<Favourites />} />
          {/* <Route path="users/:id" element={<Login />} /> */}
          <Route path="product/:id" element={<ProductsDetails />} />
        </Routes>
      </main>
      <Footer className="footer" />
    </div>
  );
}
export default App;
