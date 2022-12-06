import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../@core/redux/cart-slice";

const Cart = (props) => {
  const cartData = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount.toFixed(2));
  const dispatch = useDispatch();

  const hasItems = cartData?.length > 0;

  console.log(cartData, hasItems);

  const cartItemRemoveHandler = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  const cartItemAddHandler = (item) => {
    dispatch(cartActions.addItem({ item }));
  };

  const cartItems = (
    <ul className="">
      {cartData?.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="">
        <span className="mx-4">Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="">
        {hasItems && (
          <button className="bg-black text-white p-4 rounded-xl my-4">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
