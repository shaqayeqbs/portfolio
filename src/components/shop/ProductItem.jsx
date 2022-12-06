import React from "react";
import { NavLink } from "react-router-dom";

function ProductItem({ data }) {
  console.log(data.id);
  return (
    <NavLink to={`/products/${data.id}`}>
      <section className="bg-white p-4 px-10 rounded-2xl cursor-pointer ">
        <img src={data.image} alt="product" className="w-52 h-52 " />
        <div className="w-full mt-8 text-sm text-center">{data.title}</div>
      </section>
    </NavLink>
  );
}

export default ProductItem;
