import React from "react";
import useGetProducts from "../@core/hooks/useGetProducts";
import ProductDetail from "../components/shop/ProductDetail";
function DetailPage() {
  const { data, isLoading, isError } = useGetProducts({
    selectedFilter: "all",
  });
  return <ProductDetail list={data} isLoading={isLoading} isError={isError} />;
}

export default DetailPage;
