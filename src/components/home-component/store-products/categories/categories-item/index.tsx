import type { FC } from "react";
import { CategoryType } from "../../../../../@types";
import { searchParam } from "../../../../../generic/searchParam";

const CategoriesItem: FC<CategoryType> = ({ route_path, title, count }) => {
  const { setParam, getParam } = searchParam();
  const typeParam: string = getParam("type") || "all-plants";
  const typePrice: string = getParam("sort") || "default-sorting";
  let range_min: number = isNaN(Number(getParam("range_min")))
    ? 0
    : Number(getParam("range_min"));

  let range_max: number = isNaN(Number(getParam("range_max")))
    ? 1000
    : Number(getParam("range_max"));

  const setCategory = () => {
    const params: Record<string, string> = {
      category: route_path,
      type: typeParam,
      sort: typePrice,
    };

    if (range_min !== 0) params.range_min = String(range_min);
    if (range_max !== 1000) params.range_max = String(range_max);

    setParam(params);
  };

  return (
    <div
      onClick={setCategory}
      className={`flex items-center justify-between cursor-pointer font-bold text-[1.5rem] ${
        getParam("category") === route_path && "text-[#46A358]"
      } transition-all hover:text-[#46A358]`}
    >
      <h4>{title}</h4>
      <h6>({Math.abs(count)})</h6>
    </div>
  );
};

export default CategoriesItem;
