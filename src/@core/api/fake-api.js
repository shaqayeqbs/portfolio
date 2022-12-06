import instance from "../utils/request";
import END_POINTS from "../constants/endpoinsts";

export const getProductsApi = async ({ filter }) => {
  const url =
    filter != "all" ? END_POINTS.category + filter : END_POINTS.all_products;
  try {
    const res = await instance.get(url);
    console.log({ res });
    return res;
  } catch (err) {
    console.log({ err });
    if (err.response) {
      return err.response.data.code;
    } else {
      return `ERROR:${err}`;
    }
  }
};
