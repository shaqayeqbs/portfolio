import React from "react";
import { useParams } from "react-router";
import ProductDetailForm from "./ProductDetailForm";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useDispatch } from "react-redux";
import { cartActions } from "../../@core/redux/cart-slice";

const ProductDetail = ({ list, isError, isLoading }) => {
  const params = useParams();
  const dispatch = useDispatch();

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <div>api_error_desc</div>;

  if (!list?.length) return <div>emptyList_desc</div>;

  const product = list.find((product) => +product.id === +params.productId);

  if (!product) {
    return <p>No Products found!</p>;
  }
  console.log({ product });
  const addToCartHandler = (amount) => {
    console.log(amount);
    const item = {
      amount: amount,
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
    };
    dispatch(cartActions.addItem({ item }));
  };

  return (
    <div className="mt-32 text-center p-6 pb-12 bg-white mx-auto w-[60%] rounded-xl">
      <div className="w-56 my-6 mx-auto">
        <img src={product.image} alt="product" />
      </div>
      <div>{product.title}</div>
      <div className="m-4">
        <span className="font-bold mx-4">Price:</span>
        <span> {product.price}</span>
      </div>
      <ProductDetailForm id={product.id} onAddToCart={addToCartHandler} />
    </div>
  );
};

export default ProductDetail;
