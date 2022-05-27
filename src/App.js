import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import Layout from "./template/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout Component={HomePage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
