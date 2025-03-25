import ProductsTitle from "./product-title";
import Card from "./card";
import type { CartType } from "../../../../@types";
import { useLoader } from "../../../../generic/loading";
import { useQuerHandler } from "../../../../hooks/useQuery";
import { searchParam } from "../../../../generic/searchParam";

const Products = () => {
  const { getParam } = searchParam();
  const categoryPath: string = getParam("category") || "house-plants";
  const type: string = getParam("type") || "house-plants";
  const typePrice: string = getParam("sort") || "default-sorting";
  const range_min: number = Number(getParam("range_min")) || 0;
  const range_max: number = Number(getParam("range_max")) || 1000;
  const {
    data,
    isLoading,
    isError,
  }: { isLoading: boolean; isError: boolean; data?: CartType[] } =
    useQuerHandler({
      pathname: `products/${categoryPath}&type=${type}&=sort${typePrice}&=ragne_min${range_min}&=range_max${range_max}`,
      url: `/flower/category/${categoryPath}`,
      params: {
        type,
        sort: typePrice,
        range_min,
        range_max,
      },
    });
  const { cart_loading } = useLoader();
  return (
    <div className="w-full">
      <ProductsTitle />
      <div className="grid grid-cols-3 gap-10 mt-10">
        {isLoading || isError
          ? cart_loading()
          : data?.map((value) => <Card key={value._id} {...value} />)}
      </div>
    </div>
  );
};

export default Products;
