import type { CartType } from "../../../../@types";
import { useLoader } from "../../../../generic/loading";
import { searchParam } from "../../../../generic/searchParam";
import { useQuerHandler } from "../../../../hooks/useQuery";
import Card from "./card";
import ProductsTitle from "./products-title";

const Products = () => {
  const { getParam } = searchParam();
  const categoryPath: string = getParam("category") || "house-plants";
  const type: string = getParam("type") || "all-plants";
  const typePrice: string = getParam("sort") || "default-sorting";

  let range_min: number = Number(getParam("range_min")) || 0;
  let range_max: number = Number(getParam("range_max")) || 1000;

  const {
    data,
    isLoading,
    isError,
  }: { isLoading: boolean; isError: boolean; data?: CartType[] } =
    useQuerHandler({
      pathname: `products/${categoryPath}&type=${type}&=sort${typePrice}&=range_min${range_min}&=range_max${range_max}`,
      url: `/flower/category/${categoryPath}`,
      params: {
        type,
        sort: typePrice,
        range_min,
        range_max
      },
    });

  const { cart_loading } = useLoader();
  return (
    <div className="w-full">
      <ProductsTitle />
      <div className="grid grid-cols-3 gap-[4rem] mt-[3.1rem]">
        {isLoading || isError
          ? cart_loading()
          : data?.map((value) => <Card key={value._id} {...value} />)}
      </div>
    </div>
  );
};

export default Products;
