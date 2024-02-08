import { useRef, useState } from "react";

const ProductDetailForm = ({ onAddToCart, id }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form
      className="flex justify-center space-between "
      onSubmit={submitHandler}
    >
      <label className="text-[10px] md:text-[16px] mt-1" htmlFor="Amount">
        Amount
      </label>
      <input
        ref={amountInputRef}
        id={`"amount_" + ${id}`}
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
        className="bg-[#e2e2e2] mx-2 rounded-lg text-center"
      />
      <div className="">
        <button
          className="bg-black text-[10px] md:text-[16px] whitespace-nowrap p-3 text-white md:mx-10 md:px-10 py-1 rounded-lg"
          type="submit"
        >
          Add To Cart
        </button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </div>
    </form>
  );
};

export default ProductDetailForm;
