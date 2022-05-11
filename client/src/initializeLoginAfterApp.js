import { Routes, Route } from "react-router-dom";
import Login from "./Pages/login";

const imagesPath = "https://nimahabibi.de/shop/image/";

function InitializeLoginAfterApp() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default InitializeLoginAfterApp;
