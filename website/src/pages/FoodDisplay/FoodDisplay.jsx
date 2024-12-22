import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import "./FoodDisplay.css";
import "../../components/Foods/Foods.css";
import { FoodStore } from "../../store/FoodStore";
import { assets } from "../../assets/frontend_assets/assets";

const FoodDisplay = ({ setSelectedTab }) => {
  const { food } = useLocation().state || {};
  const { cartItem, addToCart, removeFromCart, addToFavourite, favourite } =
    useContext(FoodStore);

  const [totalItemsAdded, setTotalItemsAdded] = useState(0);
  const [totalItemsRemoved, setTotalItemsRemoved] = useState(0);
  const [showMessage, setShowMessage] = useState("");
  const [message, setMessage] = useState(false);

  const handleClick = (foodId) => {
    addToFavourite(foodId);
    setMessage(true);
    setTimeout(() => setMessage(false), 1000);
  };

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

  if (!food) {
    return <div>No food item found!</div>;
  }

  const navigate = useNavigate();

  return (
    <div className="display">
      {message && (
        <div className="message">
          {favourite[food.id] ? (
            <div className="message">
              <h3 className="add">Added</h3>
            </div>
          ) : (
            <div className="message">
              <h3 className="removed">Removed</h3>
            </div>
          )}
        </div>
      )}
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
      <button
        onClick={() => {
          navigate("/");
          setSelectedTab("home");
        }}
      >
        Back
      </button>
      <div className="display-top">
        <div className="display-left">
          <img src={food.image} alt={food.name} />
          <h4>₹{food.price}</h4>
        </div>
        <div className="display-right">
          <h3>{food.name}</h3>
          <h4>{food.description}</h4>
          <b>Category: {food.category}</b>
          {!cartItem[food.id] ? (
            <button
              className="basket"
              onClick={() => {
                addToCart(food.id);
                addItem();
              }}
            >
              Add to basket
            </button>
          ) : (
            <div className="counter">
              <img
                src={assets.remove_icon_red}
                onClick={() => {
                  removeFromCart(food.id);
                  removeItem();
                }}
                alt=""
              />
              <p>{cartItem[food.id]}</p>
              <img
                src={assets.add_icon_green}
                alt=""
                onClick={() => {
                  addToCart(food.id);
                  addItem();
                }}
              />
            </div>
          )}

          <button className="menu" onClick={() => handleClick(food.id)}>
            Add to Tasty Menu
          </button>
        </div>
      </div>
      <hr />
      <div className="display-bottom">
        <div className="display-bottom-left">
          <h2>General Reviews</h2>
          <div>
            <b>Person</b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque earum placeat recusandae deleniti dolorem voluptatum
              tenetur necessitatibus illum, exercitationem fuga.
            </p>
          </div>
          <div>
            <b>Person</b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque earum placeat recusandae deleniti dolorem voluptatum
              tenetur necessitatibus illum, exercitationem fuga.
            </p>
          </div>
          <div>
            <b>Person</b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque earum placeat recusandae deleniti dolorem voluptatum
              tenetur necessitatibus illum, exercitationem fuga.
            </p>
          </div>
          <div>
            <b>Person</b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque earum placeat recusandae deleniti dolorem voluptatum
              tenetur necessitatibus illum, exercitationem fuga.
            </p>
          </div>
        </div>
        <div className="display-bottom-right">
          <form action="/">
            <div className="together">
              <p>Rate this item (?/10): </p>
              <input type="number" required />
            </div>
            <textarea
              name="review"
              id="review"
              placeholder="Write feedback (optional)"
            ></textarea>
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;
