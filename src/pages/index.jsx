import React, { useState } from "react";
import useGetProducts from "../@core/hooks/useGetProducts";
import ProductList from "../components/shop/Lists";
import ProductFilters from "../components/filters/fiters";
const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const { data, isLoading, isError } = useGetProducts({ selectedFilter });
  console.log({ data, isLoading, isError });
  const changeFilterHandler = (filter) => {
    console.log(filter);
    setSelectedFilter(filter);
  };
  return (
    <>
      <ProductFilters onChangeFilter={changeFilterHandler} />
      {data.length > 0 && (
        <ProductList list={data} isLoading={isLoading} isError={isError} />
      )}
    </>
  );
};

export default Home;
