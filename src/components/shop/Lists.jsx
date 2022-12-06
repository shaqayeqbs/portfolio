import ProductItem from "./ProductItem";
import LoadingSpinner from "../UI/LoadingSpinner";

const ProductList = ({ isLoading, isError, list }) => {
  if (isLoading) return <LoadingSpinner />;

  if (isError) return <div>api_error_desc</div>;

  if (!list?.length) return <div>emptyList_desc</div>;
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-24 w-full  mt-36 overflow-x-auto px-20">
      {list?.map((x) => (
        <ProductItem key={x.id} data={x} />
      ))}
    </div>
  );
};

export default ProductList;
