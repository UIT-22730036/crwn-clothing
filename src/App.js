import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category/Category";
import Authentication from "./routes/Authentication/Authentication";
import Checkout from "./routes/Checkout/Checkout";
import HomePage from "./routes/HomePage/HomePage";
import Shop from "./routes/Shop/Shop";
import Layout from "./template/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout Component={HomePage} />} />
        <Route path="/auth" element={<Layout Component={Authentication} />} />
        <Route path="/shop" element={<Layout Component={Shop} />} />
        <Route
          path="/shop/checkout"
          element={<Layout Component={Checkout} />}
        />
        <Route
          path="/shop/:category"
          element={<Layout Component={Category} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
