import "./Menu.css";
import { menu_list } from "../../assets/frontend_assets/assets";
import { useContext } from "react";
import { FoodStore } from "../../store/FoodStore";

const Menu = () => {
  const { category, setCategory } = useContext(FoodStore);
  return (
    <div className="main-menu" id="main-menu">
      <h1>Main Menu</h1>
      <p className="menu-text">
        Welcome to a world of unforgettable flavors! Our menu is carefully
        crafted to delight your senses with a blend of classic favorites and
        innovative creations, using only the freshest, locally sourced
        ingredients. Whether you're craving a hearty meal, a light bite, or
        something in between, we've got something to satisfy every taste. From
        indulgent comfort foods to vibrant, healthy options, each dish is
        prepared with passion and a sprinkle of culinary magic. Let your taste
        buds explore the delicious journey ahead – we promise, it's worth every
        bite!
      </p>
      <div className="menu-list" id="menu">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="menu-list-item"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "all" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                alt="food image"
                style={{ width: "100%" }}
                className={category === item.menu_name ? "activeImg" : " "}
              />
              <p className={category === item.menu_name ? "activeText" : " "}>
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Menu;
