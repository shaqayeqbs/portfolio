import React from "react";

const ProductFilters = ({ onChangeFilter }) => {
  const tabsList = [
    {
      id: "all",
      displayName: "All",
    },
    {
      id: "electronics",
      displayName: "Electronics",
    },
    {
      id: "jewelery",
      displayName: "Jewelry",
    },
    {
      id: "men's clothing",
      displayName: "Men's clothing",
    },
    {
      id: "women's clothing",
      displayName: "Women's clothing",
    },
  ];

  return (
    <section className="text-center whitespace-nowrap mt-32 bg-[black]/80 text-white w-[90%] p-2 rounded-md mx-auto">
      {tabsList.map((tab) => (
        <button
          key={tab.id}
          onClick={(e) => {
            console.log("Button clicked", tab.id);
            onChangeFilter(tab.id);
          }}
          className="mx-1 hover:text-[#ff4800] text-[10px] md:text-[16px] md:mx-6  cursor-pointer"
        >
          {tab.displayName}
        </button>
      ))}
    </section>
  );
};

export default ProductFilters;
