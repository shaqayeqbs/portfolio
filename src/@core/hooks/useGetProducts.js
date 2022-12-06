import { useEffect, useState } from "react";
import { getProductsApi } from "../api/fake-api";

const useGetProducts = ({ selectedFilter }) => {
  console.log(selectedFilter);
  const [state, setState] = useState({
    isLoading: true,
    isError: false,
    data: [],
  });

  useEffect(() => {
    setState({
      isLoading: true,
      isError: false,
      data: [],
    });
    console.log({ selectedFilter });
    getData();
  }, [selectedFilter]);

  const getData = () => {
    getProductsApi({ filter: selectedFilter })
      .then((res) => {
        setState((prev) => ({
          isLoading: false,
          isError: false,
          data: [...prev.data, ...res?.data],
        }));
      })
      .catch(() => {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          isError: true,
        }));
      });
  };

  const data = [...state.data];
  console.log({ data });
  return { ...state, data };
};

export default useGetProducts;
