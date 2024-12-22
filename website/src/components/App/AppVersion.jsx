import { assets } from "../../assets/frontend_assets/assets";
import "./AppVersion.css";

const AppVersion = () => {
  return (
    <div className="app" id="app">
      <p>
        For better experience and in hand use Download <br /> Khana Khajana App
      </p>
      <div className="platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppVersion;
