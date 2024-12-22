import "./PlaceOrder.css";
import "../Cart/Cart.css";
import { useContext } from "react";
import { FoodStore } from "../../store/FoodStore";

const PlaceOrder = () => {
  const { getTotalAmount } = useContext(FoodStore);

  return (
    <form className="orders">
      <div className="order-left">
        <p className="info">Delivery Information</p>
        <div className="order-name">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="text" placeholder="LandMark" required />
        <input type="text" placeholder="Street" />
        <div className="order-name">
          <input type="text" placeholder="City/Village" required />
          <input type="text" placeholder="District" required />
        </div>
        <div className="order-name">
          <input type="text" placeholder="State" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="number" placeholder="Pin Code" required />
      </div>
      <div className="order-right">
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
          <button>PROCEED TO PAY</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
