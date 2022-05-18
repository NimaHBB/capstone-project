import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/functions/footer";
import Home from "./Pages/Home";
import ProductsDetails from "./Pages/productsDetail";
import Header from "./components/functions/header";
import Login from "./Pages/login";

const imagesPath = "https://nimahabibi.de/shop/image/";

function App() {
  console.clear();

  return (
    <div className="App">
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductsDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="users/:id" element={<Login />} />
        </Routes>
      </main>
      <Footer className="footer" />
    </div>
  );
}
export default App;
