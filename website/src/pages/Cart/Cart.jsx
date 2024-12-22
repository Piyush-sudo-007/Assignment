import { useContext } from "react";
import "./Cart.css";
import { FoodStore } from "../../store/FoodStore";
import { useNavigate } from "react-router-dom";

const Cart = ({ setSelectedTab }) => {
  const { cartItem, food_list, removeFromCart, getTotalAmount } =
    useContext(FoodStore);

  const navigate = useNavigate();

  return (
    <div className="cart">
      {Object.keys(cartItem).length > 0 ? (
        <h1>Good Taste ...</h1>
      ) : (
        <h1>Don't keep your basket empty !!</h1>
      )}
      <div className="cart-items">
        <div className="cart-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <>
                <div className="cart-title cart-item" key={index}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>₹{item.price * cartItem[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    X
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total Order</h2>
          <div className="order-details">
            <p>Subtotal</p>
            <p>₹{getTotalAmount()}</p>
          </div>
          <hr />
          <div className="order-details">
            <p>Delivery Charges</p>
            <p>₹{getTotalAmount() === 0 ? 0 : 45}</p>
          </div>
          <hr />
          <div className="order-details">
            <b>Total</b>
            <b>₹{getTotalAmount() === 0 ? 0 : getTotalAmount() + 45}</b>
          </div>
          <button
            onClick={() => {
              setSelectedTab("order");
              navigate("/order");
            }}
          >
            PROCEED
          </button>
        </div>

        <div className="code">
          <div>
            <p>Apply your code</p>
            <div className="code-input">
              <input type="text" name="code" placeholder="Code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
