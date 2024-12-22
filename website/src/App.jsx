import { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import TastyMenu from "./pages/TastyMenu/TastyMenu";
import FoodDisplay from "./pages/FoodDisplay/FoodDisplay";

function App() {
  const [selectedTab, setSelectedTab] = useState("");
  const [login, setLogin] = useState(false);

  return (
    <>
      {login && <Login setLogin={setLogin} />}
      <div className="main-app" id="main-app">
        <Navbar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          setLogin={setLogin}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={<Cart setSelectedTab={setSelectedTab} />}
          />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/tasty-menu" element={<TastyMenu />} />
          <Route
            path="/food-display"
            element={<FoodDisplay setSelectedTab={setSelectedTab} />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
