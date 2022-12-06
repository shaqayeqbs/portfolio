const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="">
      <div>
        <h3 className="text-md">{props.title}</h3>
      </div>

      <span className=" mx-4">{price}</span>
      <span className=" mr-10">x {props.amount}</span>

      <span>
        <button
          onClick={props.onRemove}
          className="bg-[red] mx-1 p-1 px-3 rounded-lg"
        >
          −
        </button>
        <button
          onClick={props.onAdd}
          className="bg-[red] mx-1 p-1 px-3 rounded-lg"
        >
          +
        </button>
      </span>
    </li>
  );
};

export default CartItem;
