import React from "react";
import { NavLink } from "react-router-dom";

function ProductItem({ data }) {
  console.log(data.id);
  return (
    <NavLink to={`/products/${data.id}`} className="w-full">
      <section className="bg-white p-4 w-full rounded-2xl h-96 cursor-pointer ">
        <img
          src={data.image}
          alt="product"
          className="md:w-52 md:h-52 mx-auto "
        />
        <div className="w-full mt-10 font-bold  text-sm text-center">
          {data.title}
        </div>
      </section>
    </NavLink>
  );
}

export default ProductItem;
