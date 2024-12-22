import "../../components/Foods/Foods.css";
import { useContext, useState } from "react";
import { FoodStore } from "../../store/FoodStore";
import { Link } from "react-router-dom";
import FoodItem from "../../components/Foods/FoodItem";

const TastyMenu = () => {
  const { food_list, favourite } = useContext(FoodStore);
  const [totalItemsAdded, setTotalItemsAdded] = useState(0);
  const [totalItemsRemoved, setTotalItemsRemoved] = useState(0);
  const [showMessage, setShowMessage] = useState("");

  const addItem = () => {
    setTotalItemsAdded((prev) => prev + 1);
    setTotalItemsRemoved(0);
    setShowMessage("Added in");
    setTimeout(() => setShowMessage(""), 5000);
  };

  const removeItem = () => {
    setTotalItemsRemoved((prev) => prev + 1);
    setTotalItemsAdded((prev) => prev - 1);
    setShowMessage("Removed from");
    setTimeout(() => setShowMessage(""), 5000);
  };
  return (
    <div
      className="tasty-menu"
      style={{ padding: "10px 50px", marginTop: "50px" }}
    >
      {showMessage === "Added in" && (
        <h5 className="added">
          {totalItemsAdded} Items {showMessage} your basket
        </h5>
      )}
      {showMessage === "Removed from" && (
        <h5 className="empty">
          {" "}
          {totalItemsRemoved} Items {showMessage} your basket{" "}
        </h5>
      )}
      <h2 style={{ fontSize: "30px" }}>Your Favourite Dishes</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (favourite[item._id] > 0) {
            return (
              <Link to="#" key={index} className="food-card">
                <FoodItem
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  onAddItem={addItem}
                  onRemoveItem={removeItem}
                />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TastyMenu;
