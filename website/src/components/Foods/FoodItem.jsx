import { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { FoodStore } from "../../store/FoodStore";
import { Link } from "react-router-dom";
import "./Foods.css";

const FoodItem = ({
  id,
  name,
  description,
  price,
  image,
  category,
  onAddItem,
  onRemoveItem,
}) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [danger, setDanger] = useState(false);
  const { cartItem, addToCart, removeFromCart, addToFavourite, favourite } =
    useContext(FoodStore);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <Link
          to="/food-display"
          className="food-card"
          state={{
            food: {
              id: id,
              name: name,
              image: image,
              description: description,
              price: price,
              category: category,
            },
          }}
        >
          <img src={image} alt="food image" className="food-item-img" />
        </Link>
        {!favourite[id] ? (
          <>
            {showPopUp && (
              <p className={danger ? "danger" : "popup"}>
                Add Item to Tasty Menu
              </p>
            )}
          </>
        ) : (
          <>
            {showPopUp && (
              <p className={danger ? "danger" : "popup"}>
                Remove Item from Tasty Menu
              </p>
            )}
          </>
        )}

        <div
          className="heart"
          onMouseOver={() => setShowPopUp(true)}
          onMouseLeave={() => setShowPopUp(false)}
          onClick={() => {
            addToFavourite(id);
            setDanger((prev) => !prev);
          }}
        >
          <box-icon
            type="solid"
            name="heart"
            border="circle"
            animation="tada-hover"
            size="md"
          ></box-icon>
        </div>
        {!cartItem[id] ? (
          <img
            src={assets.basket_icon}
            alt="cart"
            onClick={() => {
              addToCart(id);
              onAddItem();
            }}
            className="add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => {
                removeFromCart(id);
                onRemoveItem();
              }}
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => {
                addToCart(id);
                onAddItem();
              }}
              src={assets.add_icon_green}
              alt="add"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
