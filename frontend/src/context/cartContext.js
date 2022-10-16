import { createContext, useContext, useState } from "react";

const CartContext = createContext();
function CartProvider(props) {
  const [cart, setCart] = useState({});
  const value = [cart, setCart];
  return <CartContext.Provider value={value} {...props}></CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  if (typeof context === "undefined")
    throw new Error("useCart must be used within a  CartProvider");
  return context;
}

export { CartProvider, useCart };
