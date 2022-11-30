import { createContext, useContext, useReducer } from "react";
import handleCalTotal, {
  handleCalTotalQuantity,
} from "../handlers/handleCalTotal";
import {
  ADD_PRODUCT,
  cartReducer,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from "./cartReducer";

const cartData = [
  {
    id: 7,
    title: "Đồ chơi xếp hình hoa Tulip garden 9x12",
    image: "https://bucket.nhanh.vn/store/7534/ps/20220706/22060697_1.jpg",
    price: 220000,
    stock: 10,
    quantity: 1,
  },
  {
    id: 14,
    title: "Gấu bông MS Bell pepper bear Koala runny nose có tóc cao cấp 15cm",
    price: 295000,
    stock: 18,
    image: "https://bucket.nhanh.vn/store/7534/ps/20221121/22110132_1.jpg",
    quantity: 5,
  },
];

const CartContext = createContext();
function CartProvider(props) {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: cartData });

  const addProductToCart = (product, quantity) => {
    dispatch({ type: ADD_PRODUCT, product: product, quantity: quantity });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  const updateQuantityFromCart = (productId, quantity) => {
    dispatch({
      type: UPDATE_PRODUCT,
      productId: productId,
      quantity: quantity,
    });
  };

  const totalQuantity = () => {
    const data = cartState.cart;
    return handleCalTotalQuantity(data);
  };

  const totalMoney = () => {
    const data = cartState.cart;
    return handleCalTotal(data);
  };

  // updateQuantity

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        addProductToCart,
        removeProductFromCart,
        updateQuantityFromCart,
        totalQuantity,
        totalMoney,
      }}
      {...props}
    ></CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (typeof context === "undefined")
    throw new Error("useCart must be used within a CartProvider");
  return context;
}

export { CartProvider, useCart };
