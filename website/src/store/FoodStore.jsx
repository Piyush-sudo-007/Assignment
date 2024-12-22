import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const FoodStore = createContext(null);

const FoodStoreProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [category, setCategory] = useState("all");
  const [favourite, setFavourite] = useState([]);

  const addToCart = (itemId) => {
    setCartItem((prev) => {
      const newCartItem = { ...prev };
      if (!newCartItem[itemId]) {
        newCartItem[itemId] = 1;
      } else {
        newCartItem[itemId] += 1;
      }
      return newCartItem;
    });
  };
  const addToFavourite = (itemId) => {
    setFavourite((prev) => {
      const newFavItem = { ...prev };
      if (!newFavItem[itemId]) {
        newFavItem[itemId] = 1;
      } else {
        newFavItem[itemId] = 0;
      }
      return newFavItem;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      const newCartItem = { ...prev };
      if (newCartItem[itemId] > 1) {
        newCartItem[itemId] -= 1;
      } else {
        delete newCartItem[itemId];
      }
      return newCartItem;
    });
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const storeValue = {
    food_list,
    getTotalAmount,
    cartItem,
    addToCart,
    removeFromCart,
    category,
    setCategory,
    addToFavourite,
    favourite,
  };

  return <FoodStore.Provider value={storeValue}>{children}</FoodStore.Provider>;
};

export default FoodStoreProvider;
