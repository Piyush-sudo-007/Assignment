import { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/frontend_assets/assets";

const Login = ({ setLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login">
      <form className="login-form">
        <div className="login-title">
          <h2>{currState}</h2>
          <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-input">
          {currState === "Login" ? (
            <></>
          ) : (
            <>
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your email" required />
            </>
          )}
          <input
            type="tel"
            placeholder="Your Phone Number"
            required
            maxLength="10"
            minLength="10"
          />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="term-condition">
          <input type="checkbox" required />
          <p>By continuing , you will agree to the terms and conditions.</p>
        </div>
        {currState === "Login" ? (
          <p onClick={() => setCurrState("Sign Up")}>
            Create a new account ? <span>Sign Up</span>
          </p>
        ) : (
          <p onClick={() => setCurrState("Login")}>
            Already have a account ? <span>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
