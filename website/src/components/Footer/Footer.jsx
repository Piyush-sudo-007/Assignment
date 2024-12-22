import { assets } from "../../assets/frontend_assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-container">
        <div className="left">
          <h1 style={{ color: "tomato", fontSize: "2rem" }}>Khana Khajana.</h1>
          <p>
            This website serves the purpose of ordering food to your near by
            restaurants from anywhere and deliverd to your desired location.
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="right">
          <h2>Contact Us</h2>
          <ul>
            <li>+91-9304868598</li>
            <li>khanakhajana@gmail.com</li>
          </ul>
        </div>
        <div className="center">
          <h2>Services</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Terms and condition</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Copyright 2024 &copy; Khana Khajna. || All rights reserved
      </p>
    </div>
  );
};
export default Footer;
