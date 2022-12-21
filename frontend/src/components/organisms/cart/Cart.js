import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import emptyCart from "../../../assets/emptyCart.png";
import InputCombo from "../../molecules/InputCombo";
import { useCart } from "../../../context/cartContext";
import { removeVietnameseTones } from "../../../handlers/handleConvertUrl";
import handleFormatNumber from "../../../handlers/handleFormatNumber";

const Cart = () => {
  const navigate = useNavigate();
  // get data from cart context
  const cartContext = useCart();

  // -----------------------------------------------------
  // total money --> fix auto rerendering when quantity changes
  // const [total, setTotal] = useState(handleCalTotal(cartContext?.cart || []));
  // useEffect(() => {
  //   setTotal(handleCalTotal(cartContext?.cart || []));
  // }, []);
  return (
    <div className="cart w-[350px] bg-white rounded shadow-xl flex flex-col absolute top-full -right-5 z-[999999] p-4 cursor-default">
      <ul className="flex flex-col cart-list gap-y-3">
        {cartContext?.cart.length === 0 ? (
          <EmptyCart></EmptyCart>
        ) : (
          cartContext?.cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              stock={item.stock}
              image={item.image}
            ></CartItem>
          ))
        )}
      </ul>

      {cartContext?.cart.length === 0 ? (
        <Button
          className="w-full rounded-md bg-primary hover:bg-hover"
          onClick={() => navigate("/product")}
        >
          Mua sắm ngay
        </Button>
      ) : (
        <Fragment>
          <div className="flex items-center justify-between pt-4 pb-3">
            <span>Thành tiền</span>
            <span className="font-bold text-hot">
              {handleFormatNumber(cartContext?.totalMoney())}đ
            </span>
          </div>
          <Button
            className="w-full rounded-md bg-primary hover:bg-hover"
            onClick={() => navigate("/cart")}
          >
            Xem giỏ hàng
          </Button>
        </Fragment>
      )}
    </div>
  );
};

const CartItem = ({ id, title, image, price, quantity, stock }) => {
  const navigate = useNavigate();
  const cartContext = useCart();
  const removeProductFromCart = cartContext?.removeProductFromCart || null;
  return (
    <li className="flex items-center justify-between cursor-pointer cart-item">
      <img
        src={image}
        alt=""
        className="w-[88px] h-[88px] mr-3 cursor-pointer"
        onClick={() =>
          navigate(`/product/${removeVietnameseTones(title)}`, {
            state: { id },
          })
        }
      />
      <div className="flex-1 item-info">
        <h4
          className="font-bold cursor-pointer break-line-2 hover:text-secondary"
          onClick={() =>
            navigate(`/product/${removeVietnameseTones(title)}`, {
              state: { id },
            })
          }
        >
          {title}
        </h4>
        <p className="font-bold price text-hot">
          Đơn giá: {handleFormatNumber(price)}
        </p>
        <div className="flex items-center quantity gap-x-1">
          <InputCombo type="CART" quantity={quantity} max={stock}></InputCombo>
        </div>
      </div>
      <i
        className="w-3 p-3 cursor-pointer fa-solid fa-trash hover:text-primary"
        onClick={removeProductFromCart.bind(this, id)}
      ></i>
    </li>
  );
};

const EmptyCart = () => {
  return (
    <div className="p-5 mb-5">
      <img src={emptyCart} alt="" className="w-full" />
    </div>
  );
};

export default Cart;
