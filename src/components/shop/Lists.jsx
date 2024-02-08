import ProductItem from "./ProductItem";
import LoadingSpinner from "../UI/LoadingSpinner";

const ProductList = ({ isLoading, isError, list }) => {
  if (isLoading) return <LoadingSpinner />;

  if (isError) return <div>api_error_desc</div>;

  if (!list?.length) return <div>emptyList_desc</div>;
  return (
    <div className="grid  md:grid-cols-4  gap-4 w-full  mt-16 overflow-x-auto px-5 md:px-20">
      {list?.map((x) => (
        <ProductItem key={x.id} data={x} />
      ))}
    </div>
  );
};

export default ProductList;
