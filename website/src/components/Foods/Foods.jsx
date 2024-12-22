import { useContext, useState } from "react";
import "./Foods.css";
import { FoodStore } from "../../store/FoodStore";
import FoodItem from "./FoodItem";

const Foods = () => {
  const { food_list, category } = useContext(FoodStore);

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
    <div className="food-display" id="food-display">
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
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "all" || category === item.category) {
            return (
              <FoodItem
                id={item._id}
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                category={item.category}
                onAddItem={addItem}
                onRemoveItem={removeItem}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
export default Foods;
