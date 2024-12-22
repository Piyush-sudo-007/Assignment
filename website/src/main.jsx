import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import FoodStoreProvider from "./store/FoodStore.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FoodStoreProvider>
      <App />
    </FoodStoreProvider>
  </BrowserRouter>
);
