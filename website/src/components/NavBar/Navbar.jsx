import "./navbar.css";
import { assets } from "../../assets/frontend_assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FoodStore } from "../../store/FoodStore.jsx";

const Navbar = ({ selectedTab, setSelectedTab, setLogin }) => {
  const { getTotalAmount } = useContext(FoodStore);
  const navigate = useNavigate();

  return (
    <div className="nav" id="nav">
      <div className="logo">
        <Link to="/">
          <h2>Khana Khajana.</h2>
        </Link>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setSelectedTab("home");
            navigate("/");
          }}
          className={selectedTab === "home" ? "active" : " "}
        >
          Home
        </li>
        <a
          href="#menu"
          className={selectedTab === "menu" ? "active" : " "}
          onClick={() => {
            setSelectedTab("menu");
            navigate("/");
          }}
        >
          Menu
        </a>
        <li
          onClick={() => {
            setSelectedTab("tasty-menu");
            navigate("/tasty-menu");
          }}
          className={selectedTab === "tasty-menu" ? "active" : " "}
        >
          TastyMenu
        </li>
        <li
          onClick={() => {
            setSelectedTab("order");
            navigate("/order");
          }}
          className={selectedTab === "order" ? "active" : " "}
        >
          Orders
        </li>
        <a
          href="#footer"
          className={selectedTab === "contact" ? "active" : " "}
          onClick={() => {
            setSelectedTab("contact");
            navigate("/");
          }}
        >
          Contact
        </a>
      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="search" />
        <div className="nav-search">
          <Link to="/cart" onClick={() => setSelectedTab("cart")}>
            <box-icon
              type="solid"
              name="shopping-bag-alt"
              size="md"
              animation="tada-hover"
            ></box-icon>
          </Link>
          <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
        </div>
        <a href="#main-app">
          {" "}
          <button onClick={() => setLogin(true)}>Sign In</button>
        </a>
      </div>
    </div>
  );
};
export default Navbar;
