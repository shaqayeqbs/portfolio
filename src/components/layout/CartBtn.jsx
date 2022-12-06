import { useEffect, useState } from "react";

import { BsBasket2 } from "react-icons/bs";
import { useSelector } from "react-redux";

const CartBtn = ({ onShow }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartData = useSelector((state) => state.cart?.items);

  const numberOfCartItems = cartData?.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClasses = `class ${btnIsHighlighted ? "bump" : ""}`;

  useEffect(() => {
    if (cartData?.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartData]);

  return (
    <button
      className="bg-black text-white rounded-lg p-2 flex "
      onClick={onShow}
    >
      <span className="mx-1">
        <BsBasket2 />
      </span>
      <span>your Cart</span>
      <span className="mx-2 bg-white text-black rounded-full w-4  text-center ">
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default CartBtn;
