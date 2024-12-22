import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "./Home.css";
import Foods from "../../components/Foods/Foods";
import AppVersion from "../../components/App/AppVersion";

const Home = () => {
  return (
    <div className="home" id="home" style={{ padding: "10px" }}>
      <Header />
      <Menu />
      <Foods />
      <AppVersion />
    </div>
  );
};

export default Home;
