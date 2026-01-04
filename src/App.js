import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Dashboard from "./Dashbourd";
import Analytics from "./Analytics";
import Settings from "./Settings";
import Search from "./Serch";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products/:id" element={<ProductDetails />} />

          <Route path="/search" element={<Search />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
